import React, { useEffect, useRef } from "react";

export default function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);

    // Cleanup event listener
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  // Close on outside click
  const handleOutsideClick = (event) => {
    // If clicked element is outside modal content
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  // If modal is not open, don't render anything
  if (!isOpen) return null;

  return (
    <div className="overlay" onClick={handleOutsideClick}>
      <div className="modal" ref={modalRef}>
        {children}
      </div>
    </div>
  );
}

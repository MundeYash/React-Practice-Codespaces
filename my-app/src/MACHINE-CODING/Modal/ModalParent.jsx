import { useState } from "react";
import Modal from "./Modal";
import "./ModalStyle.css";

const ModalParent = () => {
  // create states for Modal open/close
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h4>This is Reusable Modal</h4>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>Model is opened </p>
        <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
};
export default ModalParent;

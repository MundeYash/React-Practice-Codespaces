import React from "react";
import Accordion from "./AccordianComponent";

const AccordionComponentHelper = () => {
  const items = [
    {
      title: "What is React?",
      content: (
        <p>React is a JavaScript library for building user interfaces.</p>
      ),
    },
    {
      title: "What is an Accordion?",
      content: (
        <p>An accordion is a UI component that expands/collapses content.</p>
      ),
    },
    {
      title: "Why use Accordions?",
      content: <p>They help manage large content in a compact format.</p>,
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Accordion items={items} allowMultiple={false} />
    </div>
  );
};

export default AccordionComponentHelper;

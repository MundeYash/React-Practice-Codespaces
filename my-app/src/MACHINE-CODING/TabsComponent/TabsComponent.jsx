import React, { useState } from "react";

const TabsComponent = ({ tabs = [], defaultActiveId }) => {
  const [activeId, setActiveId] = useState(
    defaultActiveId || (tabs.length ? tabs[0].id : null),
  );

  const handleKeyDown = (e) => {
    if (!tabs.length) return;

    const currentIndex = tabs.findIndex((tab) => tab.id === activeId);

    if (e.key === "ArrowRight") {
      const nextIndex = (currentIndex + 1) % tabs.length;
      setActiveId(tabs[nextIndex].id);
    }

    if (e.key === "ArrowLeft") {
      const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      setActiveId(tabs[prevIndex].id);
    }
  };

  if (!tabs.length) return <div>No Tabs Available</div>;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Tab Headers */}
      <div className="flex border-b" role="tablist" onKeyDown={handleKeyDown}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeId === tab.id}
            className={`px-4 py-2 -mb-px border-b-2 transition-all focus:outline-none ${
              activeId === tab.id
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
            onClick={() => setActiveId(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4" role="tabpanel">
        {tabs.find((tab) => tab.id === activeId)?.content}
      </div>
    </div>
  );
};

export default TabsComponent;

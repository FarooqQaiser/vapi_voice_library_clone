import React, { useState } from "react";

const GenderDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const elements = ["All", "Male", "Female", "Neutral"];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block w-full">
      <button
        onClick={handleToggle}
        className="flex justify-between items-center w-full px-4 py-2 text-white bg-[#121417] rounded-md shadow-md"
      >
        All
        <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="absolute w-full mt-2 p-2 bg-[#121417] flex flex-col gap-2 rounded-md shadow-lg z-10">
          <ul className="max-h-60 flex flex-col gap-2 overflow-y-auto">
            {elements.map((element, index) => (
              <>
                <li
                  key={index}
                  className="px-4 py-2 text-sm text-white hover:bg-[#27272A] cursor-pointer rounded-md"
                >
                  {element}
                </li>
              </>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GenderDropdown;

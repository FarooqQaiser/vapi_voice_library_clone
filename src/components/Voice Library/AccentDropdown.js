import React, { useState } from "react";

const AccentDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const accents = ["Accent 1", "Accent 2", "Accent 3", "Accent 4", "Accent 5"];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block w-full">
      <button
        onClick={handleToggle}
        className="flex justify-between items-center w-full px-4 py-2 text-white bg-[#121417] rounded-md shadow-md"
      >
        Accent
        <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="absolute w-full mt-2 p-2 bg-[#121417] flex flex-col gap-2 rounded-md shadow-lg z-10">
          <ul className="max-h-60 flex flex-col gap-2 overflow-y-auto">
            {accents.map((accent, index) => (
              <>
                <li
                  key={index}
                  className="px-4 py-2 text-sm text-white hover:bg-[#27272A] cursor-pointer rounded-md"
                >
                  {accent}
                </li>
              </>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccentDropdown;

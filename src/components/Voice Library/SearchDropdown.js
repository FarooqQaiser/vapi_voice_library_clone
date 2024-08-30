import React, { useState } from "react";

const SearchDropdown = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const elements = [
    "Element 1",
    "Element 2",
    "Element 3",
    "Element 4",
    "Element 5",
  ];

  const filteredElements = elements.filter((element) =>
    element.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block w-full">
      <button
        onClick={handleToggle}
        className="flex justify-between items-center w-full px-4 py-2 text-white bg-[#121417] rounded-md shadow-md"
      >
        11labs
        <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="absolute w-full mt-2 p-2 bg-[#121417] flex flex-col gap-2 rounded-md shadow-lg z-10">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="w-full px-4 py-2 text-sm text-gray-300 bg-[#121417] rounded-md focus:outline-none focus:bg-[#27272A]"
          />
          <ul className="max-h-60 flex flex-col gap-2 overflow-y-auto">
            {filteredElements.length > 0 ? (
              filteredElements.map((element, index) => (
                <li
                  key={index}
                  className="px-4 py-2 text-sm text-white hover:bg-[#27272A] cursor-pointer rounded-md"
                >
                  {element}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-sm text-gray-400">
                No results found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;

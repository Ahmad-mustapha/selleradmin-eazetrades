// src/components/AccordionItem.tsx
import React from "react";
// Import from react-icons (choose your preferred icon set, Io5 is common)
import { IoChevronDown } from "react-icons/io5"; // Import the specific icon

interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  toggleAccordion: (id: string) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  question,
  answer,
  isOpen,
  toggleAccordion,
}) => {
  return (
    <div className="">
      <button
        className="flex justify-between items-center w-full py-4 px-1 text-left focus:outline-none"
        onClick={() => toggleAccordion(id)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
      >
        <span className="text-[17px] sm:text-[24px] font-medium text-gray-800">
          {question}
        </span>
        {/* Container for the icon with background */}
        <span className={`flex-shrink-0 ml-4 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out ${
            isOpen ? "transform rotate-180" : ""
          }`}
        >
           {/* Use the react-icons component */}
           <IoChevronDown
             className="w-6 h-6 text-white" // Adjust size within the container
           />
        </span>
      </button>
      {/* Collapsible Panel */}
      <div
        id={`faq-answer-${id}`}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        role="region"
        aria-labelledby={`faq-question-${id}`}
      >
         <div className="pb-4 px-1 text-[14px] sm:text-[16px] text-gray-600">
            {answer}
         </div>
      </div>
    </div>
  );
};

export default AccordionItem;
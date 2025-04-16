// src/components/FaqSection.tsx
"use client";

import React, { useState } from "react";
// Import from react-icons
import { IoHelpCircle } from "react-icons/io5"; // Import the specific icon
import AccordionItem from "../../component/faq/Helpcenter";
import ContactModal from "../../component/faq/Supportmodal";



// src/data/faqData.ts
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: "faq1",
    question: "Questions here, then the answer underneath it",
    answer:
      "Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
  },
  {
    id: "faq2",
    question: "Questions here, then the answer underneath it",
    answer:
      "Another answer paragraph. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.",
  },
  {
    id: "faq3",
    question: "Questions here, then the answer underneath it",
    answer:
      "Final answer section. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Donec ut rhoncus ex. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.",
  },
];


const FaqSection: React.FC = () => {
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleAccordion = (id: string) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative bg-white p-6 md:p-8 rounded-2xl shadow-sm w-full mx-auto my-8">
      {/* FAQ List */}
      <div className="">
        {faqData.map((faq) => (
          <AccordionItem
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={openAccordionId === faq.id}
            toggleAccordion={toggleAccordion}
          />
        ))}
      </div>

      {/* Floating Action Button */}
      <button
        onClick={openModal}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
        aria-label="Open help center form"
      >
        {/* Use the react-icons component */}
        <IoHelpCircle className="w-8 h-8" />
      </button>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default FaqSection;
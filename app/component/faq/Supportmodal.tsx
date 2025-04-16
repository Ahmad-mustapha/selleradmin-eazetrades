// src/components/ContactModal.tsx
import React, { FormEvent } from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Add your form submission logic here (e.g., send data to API)
        console.log("Form submitted");
        onClose(); // Close modal after submission (optional)
    };

    // Prevent clicks inside the modal content from closing it
    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        // Overlay
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={onClose} // Close when clicking the overlay
        >
            {/* Modal Content */}
            <div
                className="bg-white rounded-2xl shadow-xl p-6 md:p-8 w-full max-w-md"
                onClick={handleContentClick} // Prevent closing when clicking content
            >
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                    Talk to or help center
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Placeholder"
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Message"
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-none" // Added resize-none
                            required
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-[100px] text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;
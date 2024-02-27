import React, { useRef, useEffect } from "react";

import PropTypes from "prop-types";

function Modal({ isOpen, onClose }) {
    const modalRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center px-4 z-10">
            <div
                ref={modalRef}
                className="bg-whitesmoke dark:bg-gray-800 p-6 md:p-10 rounded-lg shadow-2xl space-y-6 max-w-lg w-full"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                    Service Area Notice
                </h2>
                <p className="text-md md:text-lg text-gray-600 dark:text-gray-300">
                    Please note that at the moment, our services are exclusively
                    available in the Northern Utah area. We are eagerly working
                    on expanding our reach to include your area too. Stay tuned
                    for updates, and we look forward to welcoming you to the
                    Creative Warmth Family in the near future. Your patience and
                    support mean the world to us as we grow!
                </p>
                <button
                    type="button"
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow transition ease-in-out duration-150"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;

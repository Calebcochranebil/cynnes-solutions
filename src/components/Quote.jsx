import React, { useState } from "react";

import quoteImage from "../images/750 Sqft.png";
import quoteVideo from "../videos/quoteVideo.mp4";

export default function Quote() {
    const [squareFootage, setSquareFootage] = useState("");
    const [result, setResult] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const calculateQuote = () => {
        const calculatedResult = squareFootage * 3.25;
        setResult(calculatedResult);
        setIsModalOpen(true); // Open the modal after calculation
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Function to handle keyboard interaction for closing the modal
    const handleKeyPress = (event) => {
        if (event.key === "Enter" || event.key === " ") {
            // Close modal on Enter or Space key press
            closeModal();
        }
    };

    return (
        <div className="container mx-auto px-4">
            {/* Heading */}
            <h1 className="text-2xl font-bold text-center my-4">
                TWO WAYS TO GET INITIAL QUOTE
            </h1>

            <div className="flex flex-col md:flex-row items-center pt-8">
                {/* Left Side Content */}
                <div className="flex flex-col items-center justify-center md:w-1/2">
                    {/* Image and text content */}
                    <a
                        href="https://www.google.com/maps/@41.1716415,-111.9641728,15z?entry=ttu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center" // Center the link content
                    >
                        <img
                            src={quoteImage}
                            alt="Visual representation"
                            className="w-48 h-48 rounded-full mx-auto" // Center image
                        />
                        <p className="mt-4">
                            Click the image to be redirected to measure your
                            driveway:
                            <br />
                            Once you have been redirected, please watch the
                            video below
                            <br />
                            on how to get the sq/ft of your driveway.
                        </p>
                    </a>
                    {/* Video content */}
                    <div className="mt-4 w-full flex justify-center">
                        {" "}
                        <video className="max-w-full h-64 rounded" controls>
                            <source src={quoteVideo} type="video/mp4" />
                        </video>
                    </div>

                    {/* Square Footage Input Form */}
                    <div className="mt-4" style={{ marginBottom: "150px" }}>
                        <input
                            type="number"
                            value={squareFootage}
                            onChange={(e) => setSquareFootage(e.target.value)}
                            placeholder="Enter Square Footage"
                            className="border p-2"
                        />
                        <button
                            type="button" // Explicit type attribute for button
                            onClick={calculateQuote}
                            className="ml-2 bg-blue-500 text-white p-2"
                        >
                            Calculate
                        </button>
                        {isModalOpen && (
                            <div
                                className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center"
                                id="my-modal"
                            >
                                <div className="relative mx-auto p-6 border w-full max-w-lg shadow-lg rounded-lg bg-whitesmoke">
                                    <div className="bg-blue-500 text-white p-4 rounded-t-lg flex justify-between items-center">
                                        <h3 className="text-2xl font-semibold">
                                            Your Quote
                                        </h3>
                                        <button
                                            onClick={closeModal}
                                            onKeyPress={handleKeyPress}
                                            type="button"
                                            tabIndex={0}
                                            className="text-black bg-transparent hover:bg-blue-600 hover:text-white rounded-full text-lg p-2 ml-auto inline-flex items-center focus:outline-none"
                                        >
                                            &times;
                                        </button>
                                    </div>
                                    <div className="p-4">
                                        <p className="text-lg text-gray-700 mb-4">
                                            Please note that this estimate is
                                            within 10% of your final quote. Our
                                            team member will provide you with an
                                            accurate assessment and final quote
                                            upon completion of an on-site
                                            measurement.
                                        </p>
                                        <p className="text-xl font-semibold text-gray-800">
                                            ${result}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Vertical Divider */}
                <div
                    className="hidden md:block border-l-2 border-gray-300  mx-2"
                    style={{ height: "calc(100vh - 4rem)" }} // Adjust height as needed
                />

                {/* Right Side Content */}
                <div className="flex flex-col items-center justify-center md:w-1/2">
                    <p className="mt-4 text-center">
                        Right side content goes here.
                    </p>
                </div>
            </div>
        </div>
    );
}

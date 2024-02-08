/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from "react";

import quoteImage from "../images/750 Sqft.png";
import quoteVideo from "../videos/quoteVideo.mp4";

export default function Quote() {
    const [squareFootage, setSquareFootage] = useState("");
    const [result, setResult] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Contact form states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    // Address form states
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");

    const [setFeedbackMessage] = useState("");

    const calculateQuote = () => {
        const calculatedResult = squareFootage * 3.25;
        setResult(calculatedResult);
        setIsModalOpen(true); // Open the modal after calculation
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter" || event.key === " ") {
            closeModal();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name,
            email,
            message,
            address: {
                street,
                city,
                state,
                zip,
            },
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    access_key: "ffa7a7e2-1dc5-4ae2-b371-60f7ca83d8a0",
                    ...formData,
                }),
            });
            await response.json(); // Adjusted to no longer assign to an unused variable
            if (response.ok) {
                setFeedbackMessage("Form submitted successfully.");
                setIsModalOpen(false); // Close modal on success
            } else {
                setFeedbackMessage(
                    "An error occurred while submitting the form. Please try again.",
                );
            }
        } catch (error) {
            setFeedbackMessage(
                "An error occurred while submitting the form. Please check your internet connection and try again.",
            );
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
                <div className="flex flex-col items-center justify-center md:w-1/2 flex-grow">
                    <h2 className="text-xl font-bold my-4 text-center">
                        DO IT YOURSELF
                    </h2>
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
                    <div className="mt-4">
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
                            Get Quote
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
                                            Please be aware that the provided
                                            estimate is approximately within 10%
                                            of your final quote. A precise quote
                                            and assessment will be given by our
                                            team after completing the on-site
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
                    className="hidden md:block border-l-2 border-orange  mx-2"
                    style={{ height: "calc(100vh - 4rem)" }} // Adjust height as needed
                />

                {/* Right Side Content */}
                <div className="flex flex-col items-center justify-center md:w-1/2 space-y-2 flex-grow">
                    <h2 className="text-xl font-bold my-4 text-center">
                        WE GOT YOU{" "}
                    </h2>
                    <h1 className="text-xl font-semibold">Contact Us</h1>
                    <form
                        onSubmit={handleSubmit}
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        className="w-full max-w-lg bg-white rounded-lg shadow-md p-6"
                    >
                        <input
                            type="hidden"
                            name="access_key"
                            value="ffa7a7e2-1dc5-4ae2-b371-60f7ca83d8a0"
                        />
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Address
                            </h3>
                            <div className="space-y-2">
                                <div>
                                    <label
                                        htmlFor="street"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Street
                                    </label>
                                    <input
                                        type="text"
                                        id="street"
                                        value={street}
                                        onChange={(e) =>
                                            setStreet(e.target.value)
                                        }
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <label
                                            htmlFor="city"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            id="city"
                                            value={city}
                                            onChange={(e) =>
                                                setCity(e.target.value)
                                            }
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="state"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            State
                                        </label>
                                        <input
                                            type="text"
                                            id="state"
                                            value={state}
                                            onChange={(e) =>
                                                setState(e.target.value)
                                            }
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="zip"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            ZIP
                                        </label>
                                        <input
                                            type="text"
                                            id="zip"
                                            value={zip}
                                            onChange={(e) =>
                                                setZip(e.target.value)
                                            }
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-4"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

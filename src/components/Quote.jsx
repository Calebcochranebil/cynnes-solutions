import React from "react";

import quoteImage from "../images/750 Sqft.png"; // Ensure the path is correct

export default function Quote() {
    return (
        <div className="flex flex-row items-center justify-center pt-8">
            {/* Left Side Model */}
            <div className="flex flex-col items-center justify-center w-1/2">
                {/* Add your model or content for the left side here */}
                <a
                    href="https://www.google.com/maps/@39.4740732,-114.186879,859062m/data=!3m1!1e3?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={quoteImage}
                        alt="A visual representation related to the quote"
                        className="w-48 h-48 rounded-full" // Tailwind classes for size
                    />
                </a>
                <p className="mt-4 text-center">
                    {" "}
                    <p className="mt-4 text-center">
                        Click the image to be redirected to measure your
                        driveway:
                        <br />
                        Once you have been redirected, please watch the video
                        below
                        <br />
                        on how to get the sq/ft of your driveway.
                    </p>
                </p>
            </div>

            {/* Vertical Divider */}
            {/* Vertical Divider */}
            <div className="border-r-2 border-orange-500 h-full" />

            {/* Right Side Model */}
            <div className="flex flex-col items-center justify-center w-1/2">
                {/* Add your model or content for the right side here */}
                <p className="mt-4 text-center">Right side content goes here</p>
            </div>
        </div>
    );
}

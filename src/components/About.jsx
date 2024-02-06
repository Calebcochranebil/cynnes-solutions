import React, { useEffect, useRef } from "react";

// Paragraphs array defined outside the component
const paragraphs = [
    "The journey of our invention began with a simple observation – the strenuous and time-consuming task of snow removal from driveways during the harsh winters. We envisioned a more efficient, sustainable, and effortless method, leading to the birth of our customizable driveway heating mats.",
    "These heating mats are designed to fit the unique dimensions of each driveway, seamlessly connecting to cover the entire area. The idea was to create a system that not only eliminates the need for manual snow removal but also ensures safety and convenience during winter months.",
    "Our team, comprised of passionate innovators and problem-solvers, dedicated countless hours to research, design, and testing to bring this idea to life. The result is a product that stands at the forefront of winter home maintenance, revolutionizing the way snow is managed.",
    "We are proud to present a solution that not only eases the burden of winter chores but also represents our commitment to innovation and excellence. Join us in embracing a smarter, more efficient way to handle winter's challenges.",
];

export default function About() {
    const textRef = useRef([]);

    const animateParagraph = (index = 0) => {
        // Exit condition for the recursion
        if (index >= textRef.current.length) return;

        const paragraph = textRef.current[index];
        if (!paragraph) return;

        const words = paragraph.querySelectorAll("span");
        words.forEach((word, wordIndex) => {
            setTimeout(() => {
                word.style.setProperty("color", "orange");
                setTimeout(
                    () => {
                        word.style.removeProperty("color");
                    },
                    500 + wordIndex * 100,
                );
            }, wordIndex * 100);
        });

        // Calculate total animation time for current paragraph
        const totalAnimationTime = words.length * 200 + 1000;

        // Wait for the current paragraph to finish animating before starting the next
        setTimeout(() => {
            animateParagraph(index + 1);
        }, totalAnimationTime);
    };

    useEffect(() => {
        animateParagraph(); // Start animating the first paragraph
    }, []);

    const wrapWordsInSpans = (text, pIndex) => (
        <p
            key={`paragraph-${pIndex}`}
            ref={(el) => {
                textRef.current[pIndex] = el;
            }}
            className="text-base sm:text-lg" // Adjust text size based on screen size
        >
            {text.split(" ").map((word, wIndex) => {
                const key = `p-${pIndex}-w-${wIndex}-${word.replace(/[^a-zA-Z0-9]/g, "")}`;
                return (
                    <span key={key} style={{ transition: "color 0.5s ease" }}>
                        {word}{" "}
                    </span>
                );
            })}
        </p>
    );

    return (
        <div className="pt-16 sm:pt-20 p-4 sm:p-6 pb-8 sm:pb-10 max-w-xl sm:max-w-2xl mx-auto space-y-2 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                About Us
            </h2>
            {paragraphs.map((paragraph, index) =>
                wrapWordsInSpans(paragraph, index),
            )}
        </div>
    );
}

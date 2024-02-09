import React from "react";

import { render, screen } from "@testing-library/react";

import Home from "../components/Home";


test("renders data correctly", () => {
    const testData = [
        { id: 1, text: "Lorem ipsum dolor sit amet", image: "image1.jpg" },
        { id: 2, text: "Consectetur adipiscing elit", image: "image2.jpg" },
        { id: 3, text: "Sed do eiusmod tempor incididunt", image: "image3.jpg" },
    ];

    render(<Home data={testData} />);

    testData.forEach((item, index) => {
        const textElement = screen.getByText(item.text);
        const imageElement = screen.getByAltText(`Step ${index + 1}`);

        expect(textElement).toBeInTheDocument();
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute("src", item.image);
    });
});
import React from "react";

import { Link } from "react-router-dom";

import data from "../data/data";
import homeImage from "../images/heatingmat-ai.png";

export default function Home() {
    // Render data in a flex row, alternating between text and image
    const renderData = (item, index) =>
        index % 2 === 0 ? (
            <div
                key={item.id}
                className="flex flex-row justify-center  pt-4 gap-10 mx-6"
            >
                <p className="flex items-center p-2 m-2 rounded-md shadow-md">
                    {item.text}
                </p>
                <img
                    src={item.image}
                    alt={`Step ${index + 1}`}
                    className="rounded-r-lg "
                />
            </div>
        ) : (
            <div
                key={item.id}
                className="flex flex-row justify-center pt-4 gap-10 mx-6"
            >
                <img
                    src={item.image}
                    alt={`Step ${index + 1}`}
                    className="rounded-l-lg "
                />
                <p className="flex items-center p-2 m-2 rounded-md shadow-md">
                    {item.text}
                </p>
            </div>
        );

    return (
        <>
            <div
                className="min-h-[500px] bg-cover"
                style={{ backgroundImage: `url(${homeImage})` }}
            >
                <div className="flex flex-col">
                    <p className="text-xl  text-[#ff8210] pt-32 pl-6 font-semibold sm:text-2xl md:text-4xl">
                        Snow Dissolves, Comfort Resolves <br />
                        With Every Mat We Lay
                    </p>
                    <Link
                        to="/quote"
                        className="bg-[#ff8210] text-white text-xl font-semibold rounded-full max-w-[180px] text-center ml-6 mt-6 py-1 hover:opacity-90 sm:max-w-[230px] sm:text-2xl"
                    >
                        Get a Free Quote
                    </Link>
                </div>
            </div>
            <div className="">
                <div className="">{data.map(renderData)}</div>
            </div>
        </>
    );
}

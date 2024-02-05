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
                className="flex flex-row justify-center pt-10 gap-5 mx-6 sm:gap-10 md:gap-20 lg:gap-40 xl:gap-60"
            >
                <p className="flex items-center p-2 m-2 rounded-lg shadow-xl w-[700px]">
                    {item.text}
                </p>
                <img
                    src={item.image}
                    alt={`Step ${index + 1}`}
                    className="object-cover rounded-r-lg w-40 min-h-56 lg:w-60 xl:w-80 lg:h-60 xl:h-80"
                />
            </div>
        ) : (
            <div
                key={item.id}
                className="flex flex-row justify-center pt-10 gap-5 mx-6 sm:gap-10 md:gap-20 lg:gap-40 xl:gap-60"
            >
                <img
                    src={item.image}
                    alt={`Step ${index + 1}`}
                    className="object-cover rounded-l-lg w-40 min-h-56 lg:w-60 xl:w-80 lg:h-60 xl:h-80"
                />
                <p className="flex items-center p-2 m-2 rounded-lg shadow-xl w-[700px]">
                    {item.text}
                </p>
            </div>
        );

    return (
        <>
            <div
                className="min-h-[750px] bg-cover"
                style={{ backgroundImage: `url(${homeImage})` }}
            >
                <div className="flex flex-col mt-32">
                    <p className="text-[#ff8210] pt-32 pl-6 font-semibold text-2xl md:text-4xl lg:text-6xl">
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
            <h1 className="text-center font-bold pt-14 pl-6 text-1xl md:text-2xl lg:text-4xl">
                4 STEPS TO A SNOW FREE DRIVEWAY{" "}
            </h1>
            <div className="">
                <div className="">{data.map(renderData)}</div>
            </div>
        </>
    );
}

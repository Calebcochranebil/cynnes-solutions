import React from "react";

import { Link } from "react-router-dom";

import data from "../data/data";
import homeImage from "../images/heatingmat-ai.png";

export default function Home() {
    const renderData = (item, index) => (
        <div
            key={item.id}
            className={`flex flex-col sm:flex-row justify-center items-center pt-10 gap-5 mx-4 sm:mx-6 ${index % 2 === 0 ? "" : "sm:flex-row-reverse"}`}
        >
            <p className="p-2 m-2 rounded-lg shadow-xl text-base sm:text-lg md:text-xl lg:text-2xl w-full sm:max-w-md lg:max-w-lg">
                {item.text}
            </p>
            <img
                src={item.image}
                alt={`Step ${index + 1}`}
                className="object-cover rounded-lg w-full sm:w-40 md:w-60 lg:w-80 max-h-56 sm:max-h-60 lg:max-h-80"
            />
        </div>
    );

    return (
        <>
            <div
                className="min-h-[650px] bg-no-repeat bg-cover bg-center lg:min-h-screen"
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

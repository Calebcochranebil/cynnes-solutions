import React from "react";

import { Link } from "react-router-dom";

import data from "../data/data";
import homeImage from "../images/heatingmat-ai.png";

export default function Home() {
    const renderData = (item, index) =>
        index % 2 === 0 ? (
            <div key={item.id} className="flex flex-row">
                <p>{item.text}</p>
                <img src={item.image} alt={`Step ${index + 1}`} />
            </div>
        ) : (
            <div key={item.id} className="flex flex-row">
                <img src={item.image} alt={`Step ${index + 1}`} />
                <p>{item.text}</p>
            </div>
        );

    return (
        <main
            className="h-[500px] bg-cover"
            style={{ backgroundImage: `url(${homeImage})` }}
        >
            <div className="flex flex-col">
                <p className="text-4xl text-[#ff8210] pt-32 pl-6 font-semibold">
                    Snow Dissolves, Comfort Resolves <br />
                    With Every Mat We Lay
                </p>
                <Link
                    to="/quote"
                    className="bg-[#ff8210] text-white text-2xl font-semibold rounded-full max-w-[230px] text-center ml-6 mt-6 py-1 hover:opacity-90 "
                >
                    Get a Free Quote
                </Link>
            </div>
            <div className="">
                <div>
                    <h1>How it all works</h1>
                </div>
                <div className="">{data.map(renderData)}</div>
            </div>
        </main>
    );
}

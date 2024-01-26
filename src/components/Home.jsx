import React from "react";

import { Link } from "react-router-dom";

import homeImage from "../images/heatingmat-ai.png";

export default function Home() {
    return (
        <main className="h-[500px] bg-cover" style={{ backgroundImage: `url(${homeImage})`}}>
                <div className="flex flex-col">
                    <p className="text-4xl text-[#ff8210] pt-32 pl-6 font-semibold">
                        Snow Dissolves, Comfort Resolves <br />
                        With Every Mat We Lay
                    </p>
                    <Link to='/quote' className="bg-[#ff8210] text-white text-2xl font-semibold rounded-full max-w-[230px] text-center ml-6 mt-6 py-1 hover:opacity-90 ">
                        Get a Free Quote
                    </Link>

                </div>
                
            
        </main>
    );
}

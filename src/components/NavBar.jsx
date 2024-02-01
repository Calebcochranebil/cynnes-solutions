import React from "react";

import { Link } from "react-router-dom";

import logo from "../images/creative-warmth-logo.png";
import Features from "./Features";

export default function NavBar() {
    return (
        <>
            <nav className="flex flex-row items-center p-4 justify-between">
                <Link to="/" className="flex-none">
                    <img
                        src={logo}
                        alt="Cynnes Solutions Logo"
                        className="h-20 sm:h-24 md:pl-6 lg:pl-8 "
                    />
                </Link>

                <div>
                    <ul className="flex flex-row gap-4 text-md font-bold sm:text-lg md:pr-6 lg:pr-8">
                        <li className=" hover:text-blue">
                            <Link to="/">Home</Link>
                        </li>
                        <span className="text-orange">|</span>
                        <li className="hover:text-blue">
                            <Link to="/quote">Quote</Link>
                        </li>
                        <span className="text-orange">|</span>
                        <li className="hover:text-blue">
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Features />
        </>
    );
}

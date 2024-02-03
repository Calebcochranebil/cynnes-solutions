import React from "react";

import { Link } from "react-router-dom";

import logo from "../images/creative-warmth-logo.png";
import Features from "./Features";

export default function NavBar() {
    return (
        <>
            <nav className="bg-whitesmoke fixed top-0 left-0 right-0 z-10 bg-white p-4 flex flex-row items-center justify-between">
                <Link to="/" className="flex-none">
                    <img
                        src={logo}
                        alt="Cynnes Solutions Logo"
                        className="h-24 md:pl-6 lg:pl-8 "
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

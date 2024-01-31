import React from "react";

import { Link } from "react-router-dom";

import logo from "../images/creative-warmth-logo.png";
import Features from "./Features";

export default function NavBar() {
    return (
        <>
            <nav className="flex flex-row items-center p-4 ">
                <Link to="/" className="flex-none">
                    <img
                        src={logo}
                        alt="Cynnes Solutions Logo"
                        className="h-20 sm:h-24  "
                    />
                </Link>

                <div className="w-3">
                    <ul className="flex flex-row gap-4 text-md ">
                        <li className="">
                            <Link to="/">Home</Link>
                        </li>
                        <span>|</span>
                        <li className="">
                            <Link to="/quote">Quote</Link>
                        </li>
                        <span>|</span>
                        <li className="">
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Features />
        </>
    );
}

import React from "react";

import { Link } from "react-router-dom";

import logo from "../images/creative-warmth-logo.png";

export default function NavBar() {
    return (
        <nav className="w-full flex flex-row max-h-40 items-center justify-between">
            <Link className="" to="/">
                <img
                    src={logo}
                    alt="Cynnes Solutions Logo"
                    className="h-36 ml-5"
                />
            </Link>

            <div>
                <ul className="flex flex-row gap-8 mr-10">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/quote">Get a Free Quote</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

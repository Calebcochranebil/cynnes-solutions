import React from "react";

import logo from "../images/Creative Warmth.png";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <header>
                    <div className="logo-container">
                        <img
                            src={logo}
                            alt="Cynnes Solutions Logo"
                            className="header-logo"
                        />
                    </div>
                    <div className="header-text">
                        <h1>Welcome to Cynnes Solutions</h1>
                        <p>
                            Snow Dissolves, Comfort Resolves <br />
                            With Every Mat We Lay
                        </p>
                    </div>
                    <nav>
                        <ul>
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
                    </nav>
                </header>
    )
}

export default NavBar;
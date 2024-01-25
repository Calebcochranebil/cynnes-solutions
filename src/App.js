import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Features from "./Features"; // Ensure this is the correct path to your Features component
import About from "./About"; // Import the About component
import Home from "./Home"; // Import the Home component
import Quote from "./Quote"; // Import the Quote component
import "./App.css";
import logo from "./images/Creative Warmth.png"; // Ensure this is the correct path to your logo

function App() {
    return (
        <Router>
            <div>
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

                {/* Include the Features component right here */}
                <Features />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/quote" element={<Quote />} />
                </Routes>

                <footer>
                    <p>&copy; 2024 Cynnes Solutions. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;

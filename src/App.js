import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./components/About";
import Features from "./components/Features";
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import NavBar from "./components/NavBar";
import Quote from "./components/Quote";
import "./App.css";

function App() {
    return (
        <Router>
            <div>
                
                <NavBar />

                
                <Features />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/quote" element={<Quote />} />
                </Routes>
                
                <HowItWorks />
                <footer>
                    <p>&copy; 2024 Cynnes Solutions. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;

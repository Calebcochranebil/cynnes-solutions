import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Features from "./components/Features"; 
import About from "./components/About"; 
import Home from "./components/Home"; 
import Quote from "./components/Quote"; 
import "./App.css";
import NavBar from "./components/NavBar";


function App() {
    return (
        <Router>
            <div>
                <NavBar />

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

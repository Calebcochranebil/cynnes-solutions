import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Quote from "./components/Quote";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="flex flex-col h-screen bg-whitesmoke">
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/quote" element={<Quote />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

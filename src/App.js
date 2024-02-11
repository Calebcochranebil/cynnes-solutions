import React, { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Modal from "./components/Modal";
import NavBar from "./components/NavBar";
import Quote from "./components/Quote";
import "./App.css";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <Router>
            <div className="flex flex-col h-screen bg-whitesmoke">
                <NavBar />
                <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
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

import React from "react";
import Header from "./components/Header";
import Features from "./components/Features";
import Footer from "./components/Footer";
import "./css/style.css"; // Assuming you have global CSS

function App() {
    return (
        <div>
            <Header />
            <main>
                <Features />
                {/* Other components for different sections of your page */}
            </main>
            <Footer />
        </div>
    );
}

export default App;

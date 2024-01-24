import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from "./About"; // Import the About component
import "./App.css";
import logo from "./images/Creative Warmth.png";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        {/* Update other navigation links as needed */}
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">{/* Home page content */}</Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

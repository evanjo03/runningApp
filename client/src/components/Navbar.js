import React from "react";
import { Link } from "react-router-dom"



function Navbar() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Home
        </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/log"
                    className={window.location.pathname === "/log" ? "nav-link active" : "nav-link"}
                >
                    Log Run
        </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/list"
                    className={window.location.pathname === "/list" ? "nav-link active" : "nav-link"}
                >My Runs
        </Link>
            </li>
        </ul>
    );
}

export default Navbar;


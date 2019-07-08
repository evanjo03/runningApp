import React from "react";
import { Link } from "react-router-dom"

function Navbar() {
    let isLoggedIn = window.localStorage.getItem("username"), logout = () => {
        localStorage.clear();
        window.location.reload();
    }


    if (isLoggedIn) {
        return (
            <ul className="nav nav-tabs">

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
                {(isLoggedIn ? <button onClick={logout}>Logout</button> : null)}
            </ul>
        )
    } else { return null }
}

export default Navbar;


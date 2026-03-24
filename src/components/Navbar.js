import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="navbar">
            <h2>Prachi</h2>
            <ul>
                <div style={{ display: "flex", gap: "20px" }} className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <HashLink smooth to="/#profile">Profile</HashLink>
                    <HashLink smooth to="/#about">About</HashLink>
                    <HashLink smooth to="/#skills">Skills</HashLink>
                    <HashLink smooth to="/#projects">Projects</HashLink>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
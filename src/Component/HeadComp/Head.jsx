
import React, { useState } from "react";
import "./Head.css";
import Logo from "../../assets/Logo.svg";
import Menu from "../../assets/menuu.svg";
import Button from "../Button";
import { Link } from "react-router-dom";

const Head = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = (e) => {
        e.preventDefault();
        setMenuOpen((prev) => !prev);
    };

    return (
        <nav>
            <div className="logo">
                <img src={Logo} alt="" />
                <p> Gual </p>
            </div>

            <ul className={menuOpen ? "active" : ""}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/pill">PillPack</Link></li>
                <li><Link to="/">Health</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <div className="btn">
                <Button btnName='Sign Up | Sign In' />
            </div>
            <li className="menu">
                <a href="#" onClick={handleMenuClick}>
                    <img src={Menu} alt="Menu" />
                </a>
            </li>
        </nav>
    );
};

export default Head;





















import React from 'react';
import {
    Link
} from "react-router-dom";
import LogoImage from '../images/uv.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


const Navbar = () => {

    const [menu, setMenu] = useState(false)
    const toggleMenu = () => {
        setMenu(
            oldMenu => {
                return !oldMenu
            }
        )
    }
    return (
        <nav>
            <div className="nav-row">
                <div className="nav-logo">
                    <div className="logo">
                        <img src={LogoImage} />
                    </div>
                </div>
                <div className="font-awesome-icon">
                    <FontAwesomeIcon onClick={toggleMenu} icon={faBars} className={`burger ${menu ? "burger-open" : "burger-close"}`} />
                </div>
                <div className={`nav-links ${menu ? "" : "menu-hidden"}`}>
                    <ul className="nav-ul">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/facts">Facts</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
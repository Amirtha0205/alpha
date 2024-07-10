
import React, { useState } from 'react';
import './Navbar.css';
import AlphaTech from '../assests/Alpha-Technologies-LOGO.jpg';

function Navbar() {
    const [openMenu, setOpenMenu] = useState(null);

    const handleMenuToggle = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    return (
        <nav className="navbar">
            <img className="navbar-logo" src={AlphaTech} alt='Alpha Technologies Logo' />
            <ul className="navbar-menu">
                <li className="navbar-item">
                    <a href="/" className="navbar-link">Home</a>
                </li>
                <li className="navbar-item">
                    <a className="navbar-link" onClick={() => handleMenuToggle('menu1')}>Products</a>
                    {openMenu === 'menu1' && (
                        <ul className="dropdown-menu">
                            {/* <li className="dropdown-item">
                                <a href="#" className="dropdown-link">Products by </a>
                            </li> */}
                            <li className="dropdown-item">
                                <a className="dropdown-link">Products by Category</a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item">
                                        <a href="/Best-OT-Equipments-in-chennai" className="dropdown-link">OT Equipments</a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a href="#" className="dropdown-link">ICU Equipments</a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a href="#" className="dropdown-link">Laboratory Equipments</a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a href="#" className="dropdown-link">Cardiology Equipments</a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a href="#" className="dropdown-link">POCT Products</a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a href="#" className="dropdown-link">Ultra sounds</a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a href="#" className="dropdown-link">Echo sounds</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown-item">
                                <a href="#" className="dropdown-link">Products by Brand</a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item">
                                        <a href="#" className="dropdown-link">Comen</a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a href="#" className="dropdown-link">Mindray</a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a href="#" className="dropdown-link">Concept Biomedicals</a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a href="#" className="dropdown-link">Gretin</a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a href="#" className="dropdown-link">Proton</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="navbar-item">
                    <a href="/About-The-Best-Medical-Equipment-Provider" className="navbar-link">About</a>
                </li>
                <li className="navbar-item">
                    <a href="/Services-Alpha-Technologies-Provide" className="navbar-link">Services</a>
                </li>
                <li className="navbar-item">
                    <a href="/Contact-The-Best-Medical-Equipment-Provider" className="navbar-link">Contact</a>
                </li>
               
            </ul>
        </nav>
    );
}

export default Navbar;
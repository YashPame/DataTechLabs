import { useState } from "react";
import './Navbar.css';

import Progress from "./Components/Progress";
import Analytics from "./Components/Analytics";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";

import {Route, Routes, Link} from "react-router-dom";

function Navbar() {

    const [nav, setnav] = useState(true );

    const handleNav = () => {
        setnav(!nav);
    }
    return (
        <div className="navbar">
        <nav className={nav ? "sidebar close"
            : "sidebar"}>
            <header>
                <div className="text logo-text">
                    <span className="name">AI </span>
                    <span className="profession">Sidebar</span>
                </div>
                <i onClick={handleNav} className='bx bx-chevron-right toggle'></i>
            </header>

            <div className="menu-bar">
                <div className="menu">
                    <li   className="search-box ">
                        <i onClick={handleNav}   className='bx bx-search icon'></i>
                        <input type="text" placeholder="Search..." />
                    </li>
                    <ul className="menu-links">
                        <li className="nav-link">
                            <Link to="/dashboard">
                                <i className='bx bx-home-alt icon'></i>
                                <span className="text nav-text">Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/progress">
                                <i className='bx bx-bar-chart-alt-2 icon'></i>
                                <span className="text nav-text">Progress</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/analytics">
                                <i className='bx bx-pie-chart-alt icon'></i>
                                <span className="text nav-text">Analytics</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/profile">
                                <i className='bx bx-user icon'></i>
                                <span className="text nav-text">Profile</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="bottom-content">
                    <li className="">
                        <a href="/">
                            <i className='bx bx-log-out icon'></i>
                            <span className="text nav-text">Logout</span>
                        </a>
                    </li>
                </div>
            </div>
        </nav>
        
        </div>
    );
}

export default Navbar;

import { useState } from "react";
import './Navbar.css';
function Navbar() {

    const [nav, setnav] = useState(true );

    const handleNav = () => {
        setnav(!nav);
    }
    return (
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
                            <a href="#">
                                <i className='bx bx-home-alt icon'></i>
                                <span className="text nav-text">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <i className='bx bx-bar-chart-alt-2 icon'></i>
                                <span className="text nav-text">Progress</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <i className='bx bx-pie-chart-alt icon'></i>
                                <span className="text nav-text">Analytics</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="bottom-content">
                    <li className="">
                        <a href="#">
                            <i className='bx bx-log-out icon'></i>
                            <span className="text nav-text">Logout</span>
                        </a>
                    </li>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

import React from "react";
import { Link } from 'react-router-dom';
import ForLocalsLogo from '../Assets/ForLocalsLogo.png';

export default function Navigation() {
  return (
    <nav className="navbar fixed-top navbar-light">
        <ul className="navbar-nav nav-ul">
        <Link to="/">
            <img src={ForLocalsLogo} alt='logo' className="navbar-logo nav-item" />
        </Link>
            <li className="nav-item">
                <Link className="nav-link" to="/">
                    HOME
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/search">
                    SEARCH
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/localProfile">
                    PROFILE
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/businessProfile">
                    BUSINESS
                </Link>
            </li>
        </ul>
        <div className="nav-btn-div">
            <button className="btn nav-btn btn-outline-success">
                LOGIN
            </button>
            <button className="btn nav-btn btn-outline-success">
                LOG OUT
            </button>
            <button className="btn nav-btn btn-success">
                REGISTER
            </button>
        </div>
    </nav>
  )
}

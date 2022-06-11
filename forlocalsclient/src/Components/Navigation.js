import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ForLocalsLogo from '../Assets/ForLocalsLogo.png';
import signOutUser from '../Data/auth';

export default function Navigation({user}) {
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
            {user ? ( 
                <div>
                <button 
                    className="btn nav-btn btn-outline-success"
                    onClick={signOutUser}
                >
                    LOG OUT
                </button>
                <button 
                   className="btn nav-btn btn-success"
                   to="/businessProfile"
                >
                    REGISTER
                </button>
                </div>
            ) : ( 
                <Link 
                    className="btn nav-btn btn-outline-success"
                    to="/login"
                >
                    LOGIN
                </Link>
            )}
        </div>
    </nav>
  )
}

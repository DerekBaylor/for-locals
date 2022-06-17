import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import ForLocalsLogo from '../Assets/ForLocalsLogo.png';
import { signInUser, signOutUser } from "../Data/authManager";

export default function Navigation({ local }) {
    const navigate = useNavigate();
    
    const handleClick = (e) => {
        signInUser().then(() => {
            const firebaseKey = sessionStorage.getItem("firebaseKey")
              navigate(`/localProfile/${firebaseKey}`);
          });
      }

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
        </ul>
        <div className="nav-btn-div">
            {local ? ( 
                <div className="hidden-buttons">
                    <ul className="navbar-nav nav-ul">
                        <li className="nav-item">
                            <Link className="nav-link" to={`/localProfile/${local.firebaseKey}`}>
                                PROFILE
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/businessProfile/${local.firebaseKey}`}>
                                BUSINESS
                            </Link>
                        </li>
                        <button 
                            className="btn nav-btn btn-outline-success"
                            onClick={signOutUser}
                            to="/"
                            >
                            LOG OUT
                        </button>
                    </ul>
                </div>
            ) : ( 
                <button 
                    className="btn nav-btn btn-outline-success"
                    onClick={(e) => handleClick(e)}
                    local={local}
                    >
                    Login
                </button>
            )}
        </div>
    </nav>
  )
}

Navigation.propTypes = {
    local: PropTypes.shape(PropTypes.obj),
  };
  
  Navigation.defaultProps = {
    local: null,
  };
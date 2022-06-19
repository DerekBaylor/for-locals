import React, { useState } from "react";
import PropTypes from 'prop-types';
import ForLocalsLogo from '../Assets/ForLocalsLogo.png';
import { signInUser, signOutUser } from "../Data/authManager";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    ButtonGroup,
  } from "reactstrap";

export default function Navigation({ local }){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);



    return(
        <Navbar className='navbar nav-container' expand='md' light>
            <NavbarBrand className='navbrand-style img-container' href='/'>
                <img src={ForLocalsLogo} alt='logo' className="navbar-logo nav-item img-fluid" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse className={`collapse-isOpen-${isOpen}`} isOpen={isOpen} navbar>
            <Nav className={`container-fluid`} navbar>
                <div className='nav-div'>
                  <li>
                    <NavItem className='nav-item'>
                        <NavLink className='nav-link' onClick={isOpen} href='/'>
                        HOME
                      </NavLink>
                    </NavItem>
                  </li>
                  <li>
                    <NavItem className='nav-item'>
                      <NavLink onClick={isOpen} href='/search'>
                        SEARCH
                      </NavLink>
                    </NavItem>
                  </li>
                    {local ? (
                        <div className='nav-div'>
                            <li>
                                <NavItem className='nav-item'>
                                    <NavLink className='nav-link' onClick={isOpen} href={`/localProfile/${local.firebaseKey}`}>
                                        PROFILE
                                    </NavLink>
                                </NavItem>
                            </li>
                            <li>
                                <NavItem className='nav-item'>
                                    <NavLink className='nav-link' onClick={isOpen} href={`/businessProfile/${local.firebaseKey}`}>
                                     BUSINESS
                                    </NavLink>
                                </NavItem>
                            </li>
                        </div>
                    ) : (null)
                    }
                  </div>

                  <ButtonGroup className='nav-item nav-btn-div'>
                    {local ? (
                    <button
                        type='button'
                        className='btn btn-outline-success'
                        onClick={signOutUser}
                    >
                        LOG OUT
                    </button>
                    ) : (
                        <button
                        type='button'
                        className='btn btn-outline-success'
                        onClick={signInUser}
                        local={local}
                    >
                        LOGIN
                    </button>
                    )}
                    </ButtonGroup>

            </Nav>
          </Collapse>
      </Navbar>
    );
};


Navigation.propTypes = {
    local: PropTypes.shape(PropTypes.obj),
  };
  
  Navigation.defaultProps = {
    local: null,
  };
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { signInUser } from '../Data/authManager';

export default function Login() {
    const navigate = useNavigate();
    const firebaseKey = sessionStorage.getItem("uid")

    const handleClick = (e) => {
        signInUser();
        // navigate(`/localProfile/${firebaseKey}`);
        navigate(`/`);
      }

    return (
        <div className='main-body-div'>
        <div className='navbar-spacing'></div>
        <div className="title">
            Local Login
            <hr className="hr" />
        </div>
        <div className='div-body'>
          <div className='btn-div'>
            <button className='login-button btn btn-info' onClick={(e) => handleClick(e)}>Login</button>
          </div>
        </div>
      </div>
    )
}

// Login.propTypes = {
//   local: PropTypes.shape(PropTypes.obj),
// };

// Login.defaultProps = {
//   local: null,
// };

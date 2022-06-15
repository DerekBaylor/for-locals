import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInUser } from '../Data/authManager';

export default function Login() {
    const navigate = useNavigate();
    
    const handleClick = (e) => {
      signInUser().then(() => {
        const firebaseKey = sessionStorage.getItem("firebaseKey")
          navigate(`/localProfile/${firebaseKey}`);
      });
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

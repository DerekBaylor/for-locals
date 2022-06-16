import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getBusinessByOwnerKey } from '../Data/BusinessData';
import BusinessManagerCard from '../Components/BusinessManagerCard';

export default function BusinessProfile() {
  const [businessData, setBusinessData] = useState([]);
  const { firebaseKey } = useParams();

  useEffect(() => {
    getBusinessByOwnerKey(firebaseKey).then(setBusinessData);
  },[]);

  
  const warn = () => {
    console.warn('Business Data',businessData )
  };

  return (
    <div className='main-body-div'>
      <div className='navbar-spacing'></div>
      <div className='navbar-spacing'></div>
      <div className='view-container'>
        <div className='card-div'>
          <BusinessManagerCard  
            card={businessData}
            />
        </div>
        <div className='btn-container'>
          <Link 
              className="btn nav-btn btn-success"
              to={`/registerBusiness/${firebaseKey}`}
              >
                  REGISTER
            </Link>
        </div>
      </div>
      <button className='btn btn-warning' onClick={warn}>Warn</button>
    </div>
  )
}
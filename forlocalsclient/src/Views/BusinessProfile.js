import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getBusinessByOwnerKey } from '../Data/BusinessData';
import BusinessCard from '../Components/BusinessCard';

export default function BusinessProfile() {
  const [businessData, setBusinessData] = useState([]);
  const { firebaseKey } = useParams();

  useEffect(() => {
    getBusinessByOwnerKey(firebaseKey).then(setBusinessData);
  },[firebaseKey]);

  
  // const warn = () => {
  //   console.warn('Owner', ownerKey)
  // };

  return (
    <div className='main-body-div'>
      <div className='navbar-spacing'></div>
      <div className='navbar-spacing'></div>
      <div className='view-container'>
        <div className='card-div'>
          <BusinessCard  
            obj={businessData}
            />
        </div>
        <div className='btn-container'>
          <Link 
              className="btn nav-btn btn-success"
              to="/registerBusiness"
              >
                  REGISTER
            </Link>
        </div>
      </div>
      {/* <button className='btn btn-warning' onClick={warn}>Warn</button> */}
    </div>
  )
}
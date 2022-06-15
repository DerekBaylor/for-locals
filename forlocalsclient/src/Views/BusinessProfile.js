import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBusinessByOwnerKey } from '../Data/BusinessData';
import BusinessCard from '../Components/BusinessCard';

export default function BusinessProfile() {
  const [businessData, setBusinessData] = useState([]);
  const { firebaseKey } = useParams();

  useEffect(() => {
    getBusinessByOwnerKey(firebaseKey).then(setBusinessData);
  },[firebaseKey]);

  return (
    <div className='main-body-div'>
      <div className='navbar-spacing'></div>
      <div className='navbar-spacing'></div>
      Business Profile
      <div className='card-div'>
        <BusinessCard  obj={businessData} />
      </div>
    </div>
  )
}

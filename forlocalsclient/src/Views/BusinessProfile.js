import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getBusinessByOwnerId } from '../Data/BusinessData';
import BusinessCard from '../Components/BusinessCard';

export default function BusinessProfile({ local }) {
  const [businessData, setBusinessData] = useState([]);

  useEffect(() => {
    getBusinessByOwnerId(local.userId).then(setBusinessData)
  }, []);
  
  const warn = () => {
    console.warn(local)
    console.warn('id', local.userId)
    console.warn('business', businessData)
  };


  return (
    <div className='main-body-div'>
      <div className='navbar-spacing'></div>
      <div className='navbar-spacing'></div>
      BusinessProfile
      <div className='card-div'>
        {businessData.map((card) => {
          return (
            <BusinessCard 
            key = {card.businessId}
            card = {card}
            />
          )
        })}
      </div>
      <button onClick={warn}>
       Warn
      </button>
    </div>
  )
}

BusinessProfile.propTypes = {
  local: PropTypes.shape(PropTypes.obj).isRequired,
};
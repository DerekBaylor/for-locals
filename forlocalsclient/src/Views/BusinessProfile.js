import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getBusinessByOwnerKey } from '../Data/BusinessData';
import BusinessManagerCard from '../Components/BusinessManagerCard';

export default function BusinessProfile() {
  const [businessData, setBusinessData] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getBusinessByOwnerKey(firebaseKey).then(setBusinessData);
  },[]);

  return (
    <div className='main-body-div business-profile-container'>
      <div className='view-container'>
        <div className='business-profile-card-container'>
          <BusinessManagerCard  
            busData={businessData}
            />
        </div>
        { !businessData ? (
          <div className='btn-container'>
          <Link 
              className="btn nav-btn btn-success reg-bus-btn"
              to={`/registerBusiness/${firebaseKey}`}
              >
              REGISTER
            </Link>
        </div>
        ): (null)}
      </div>
    </div>
  )
}
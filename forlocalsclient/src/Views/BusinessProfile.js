import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getBusinessByOwnerKey, deleteBusiness } from '../Data/BusinessData';
import BusinessManagerCard from '../Components/BusinessManagerCard';

export default function BusinessProfile() {
  const [businessData, setBusinessData] = useState({});
  const { firebaseKey } = useParams();
  const [tick, setTick ] = useState(0)

  useEffect(() => {
    getBusinessByOwnerKey(firebaseKey).then(setBusinessData);
  },[firebaseKey]);

  useEffect(() => {
    setBusinessData({});
  }, [tick])

  const handleClick = () => {
      deleteBusiness(businessData.businessId).then(() =>
      getBusinessByOwnerKey(firebaseKey).then(setBusinessData)); 
      setTick(tick+1);
  };

  return (
    <div className='main-body-div business-profile-container'>
      <div className='view-container'>
      { Object.keys(businessData).length > 0 ? (
        <div className='business-profile-card-container'>
          <BusinessManagerCard  
            busData={businessData}
            />
        </div>
      ) : (null)}
        { Object.keys(businessData).length === 0 ? (
          <div className='btn-container'>
          <Link 
              className="btn nav-btn btn-success reg-bus-btn"
              to={`/registerBusiness/${firebaseKey}`}
              >
              REGISTER
            </Link>
        </div>
        ): (
          <div className='btn-container'>
            <button className='btn btn-outline-success del-bus-btn' onClick={handleClick}>DELETE BUSINESS</button>
          </div>
        )}
      </div>
    </div>
  )
}
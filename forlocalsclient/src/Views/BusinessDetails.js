import React, { useEffect, useState } from 'react'
import BusinessIcon from '../Assets/BusinessIcon.png'
import { getBusinessById } from '../Data/BusinessData';
import { useParams } from 'react-router-dom';
import BusinessDetailsCard from '../Components/BusinessDetailsCard';

export default function BusinessDetails() {
  const [business, setBusiness] = useState({});
  const {key} = useParams();
  
  useEffect(() => {
    getBusinessById(key).then(setBusiness)
  }, []);

  return (
    <div className="main-body-div">
      <div className="navbar-spacing"></div>
      <div className="business-body-div">
        <img className="business-img" src={BusinessIcon} alt="business" />
        <div className='business-spacing'></div>
        <div className="business-body">
          <BusinessDetailsCard bus={business} />
        </div>  
      </div>
      <div className="main-review-div">
        <div className='review-header'>User Reviews</div>
        <hr/>
        <div className="reivew-card-div">
          <div>Review Cards</div>
        </div>
      </div>

    </div> 
  )
};


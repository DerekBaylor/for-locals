import React, { useState, useEffect } from "react";
import FeatureBusinessCard from '../Components/FeatureBusinessCard'
import { getBusinessById, getAllBusinesses } from "../Data/BusinessData";
import BusinessIcon from '../Assets/BusinessIcon.png'

export default function Home() {
  const [businessData, setBusinessData] = useState([]);
  const [featBusiness, setFeatBusiness] = useState([]);

  const busId = 3;

  useEffect(() => {
      getBusinessById(busId).then(setFeatBusiness);
      getAllBusinesses().then(setBusinessData);
  }, []);

  useEffect(() => {
    console.warn('business2', businessData)
    console.warn('featBusiness2', featBusiness)
  }, []);

  const warn = () => {
    getBusinessById(3).then(console.warn);
    getAllBusinesses().then(console.warn);
  };

  return (
    <div className='main-body-div'>
      <div className='navbar-spacing'></div>
      <div className='featured-card-div card-div'>
      {businessData.map((card) => (
        <FeatureBusinessCard 
          key = {card.businessId}
          card={card}
          setCards={setBusinessData}
        />
      ))}
      {/* <FeatureBusinessCard />  */}
      {/* <h5 className="card-title">{business.businessName}</h5> */}


      <div className="featured-business-card">
    <div className="card-div-two">
      <img className="featured-card-img" src={BusinessIcon} alt="featured business" />
      <div className="card-body">
          {/* <h5 className="card-title">{business.businessName}</h5> */}
          <h5 className="card-title">business</h5>
          <p className="card-text">Description</p>
          <div className="card-btn-div">
            <button onClick={warn} className="btn btn-primary card-btn">Details</button>
          </div>
      </div>


    </div>
  </div>


      </div>
    </div>
  )
};

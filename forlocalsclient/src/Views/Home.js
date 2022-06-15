import React, { useState, useEffect } from "react";
import FeatureBusinessCard from '../Components/FeatureBusinessCard'
import { getBusinessById } from "../Data/BusinessData";

export default function Home() {
  const [featBusiness, setFeatBusiness] = useState({});

  const busId = 3;

  useEffect(() => {
      getBusinessById(busId).then(setFeatBusiness);
  }, []);

  return (
    <div className='main-body-div'>
      <div className='navbar-spacing'></div>
      <div className='featured-card-div card-div'>
      <FeatureBusinessCard featBus={featBusiness} /> 
    </div>
  </div>
  )
};

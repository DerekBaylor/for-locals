import React, { useState, useEffect } from "react";
import FeatureBusinessCard from '../Components/FeatureBusinessCard'
import { getAllBusinesses, getBusinessById } from "../Data/BusinessData";

export default function Home() {
  const [business, setBusiness] = useState();
  const [businessData, setBusinessData] = useState([]);

  useEffect(() => {
    getAllBusinesses().then(setBusinessData);
  }, []);

  // const randomBusinessId = () => {
  //   let busId = Math.floor(Math.random() * businessData.length) + 1;
  //   console.warn("busId",busId);
  //   return busId;
  // }
  useEffect(() => {
    // getBusinessById(randomBusinessId()).then(setBusiness);
    let isMounted = true;
    if (isMounted) {
      getBusinessById(3).then((bus) => {
        setBusiness(bus);
      });
    }
    // return () => {
    //   isMounted = false;
    // };
  },[]);

  return (
    <div className='main-body-div'>
      <div className='navbar-spacing'></div>
      <div className='featured-card-div card-div'>
      {business.map((card) => (
        <FeatureBusinessCard 
          key = {card.BusinessId}
          card={card}
          setCards={setBusiness}
        />
      ))}
      {/* <FeatureBusinessCard  */}
      {/* /> */}
      {/* <h5 className="card-title">{business.businessName}</h5> */}
      </div>
    </div>
  )
};

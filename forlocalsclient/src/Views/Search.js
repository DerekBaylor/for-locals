import React, { useEffect, useState } from 'react'
import BusinessCard from '../Components/BusinessCard'
import SerachBar from '../Components/SerachBar'
import { getAllBusinesses } from '../Data/BusinessData'

export default function Search() {
  const [businessData, setBusinessData] = useState([]);

  useEffect(() => {
    getAllBusinesses().then(setBusinessData);
  }, []);
  
  return (
    <div className='main-body-div'>
    <div className='navbar-spacing'></div>
    <div className='search-bar-div'>
      <SerachBar />
    </div>
    <div className='card-div'>
      {businessData.map((card) => (
        <BusinessCard 
          key = {card.businessId}
          card={card}
          setCards={setBusinessData}
        />
      ))}
    </div>
  </div>
  )
};

import React, { useEffect, useState } from 'react'
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
    <div className='navbar-spacing'></div>
    <div className='search-bar-div'>
      <SerachBar data={businessData} />
    </div>
  </div>
  )
};

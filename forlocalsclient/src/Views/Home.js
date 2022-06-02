// import React, { useState, useEffect } from "react";
import React from "react";
import FeatureBusinessCard from '../Components/FeatureBusinessCard'

export default function Home() {
  // const [getBusiness, setBusiness] = useState([]);

  // useEffect(() => {
  //   let isMounted = true;
  //   if (isMounted) {
  //     getBusiness().then(setBusiness);
  //   }
  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  return (
    <div className='main-body-div'>
      <div className='navbar-spacing'></div>
      <div className='card-div'>
        <FeatureBusinessCard />

      </div>
    </div>
  )
}

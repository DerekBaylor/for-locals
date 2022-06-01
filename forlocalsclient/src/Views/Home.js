// import React, { useState, useEffect } from "react";
// import FeatureBusinessCard from '../Components/FeatureBusinessCard'
import React from "react";
import DefaultBusinessImg from '../Assets/DefaultBusinessImg.jpg'

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
        {/* <FeatureBusinessCard /> */}

        <div className="card featured-business-card">
          <div className="card-div">
            <img className="featured-card-img" src={DefaultBusinessImg} alt="featured business" />
            <div className="card-body">
                <h5 className="card-title">Featured Business</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

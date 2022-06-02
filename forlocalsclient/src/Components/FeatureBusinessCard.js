import React from 'react';
import DefaultBusinessImg from '../Assets/DefaultBusinessImg.jpg'

export default function FeatureBusinessCard() {
  return (
    <div className="card featured-business-card">
    <div className="card-div-two">
      <img className="featured-card-img" src={DefaultBusinessImg} alt="featured business" />
      <div className="card-body">
          <h5 className="card-title">Featured Business</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="card-btn-div">
          <a href="#" className="btn btn-primary card-btn">Details</a>
        </div>
      </div>
    </div>
  </div>
  )
}

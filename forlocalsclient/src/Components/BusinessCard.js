import React from 'react'
import BusinessIcon from '../Assets/BusinessIcon.png'

export default function BusinessCard() {
  return (
    <div class="business-card">
        <img className="card-img" src={BusinessIcon} alt="a business" />
        <div class="card-body">
            <h5 class="card-title">Business Name</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="card-btn-div">
          <a href="#" className="btn btn-success card-btn">Details</a>
        </div>
        </div>
    </div>
  )
};

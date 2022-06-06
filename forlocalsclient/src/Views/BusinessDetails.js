import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import BusinessIcon from '../Assets/BusinessIcon.png'

export default function BusinessDetails() {
  return (
    <div className="main-body-div">
      <div className="navbar-spacing"></div>
      <div className="business-body-div">
        <img className="business-img" src={BusinessIcon} alt="business" />
        <div className='business-spacing'></div>
        <div className="business-body">
          {/* <h5 className="card-title">{card.businessName}</h5>
          <p className="card-text">{card.description}</p> */}
          <div className='business-score bus-detail'>Review Score</div>
          <div className="business-name bus-detail">Business Name</div>
          <div className="business-owner bus-detail">Owner Name</div>
          <div className="business-phone bus-detail">Phone</div>
          <div className="business-address bus-detail">Address</div>
          <div className="business-industry bus-detail">Inudstry</div>
          <div className="business-text bus-detail">Description</div>
          <div className="card-btn-div">
              <button className="btn btn-primary business-btn">Leave A Review</button>
          </div>
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


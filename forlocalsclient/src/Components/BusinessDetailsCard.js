import React from 'react'
import PropTypes from 'prop-types';


export default function BusinessDetailsCard({bus}) {
  return (
    <div className="business-body">
        <div className='business-score bus-detail'>{bus.reviewScore}</div>
        <div className="business-name bus-detail">{bus.businessName}</div>
        <div className="business-owner bus-detail">{bus.owner}</div>
        <div className="business-phone bus-detail">{bus.phone}</div>
        <div className="business-address bus-detail">{bus.address}</div>
        <div className="business-industry bus-detail">{bus.industry}</div>
        <div className="business-text bus-detail">{bus.description}</div>
        <div className="card-btn-div">
            <button className="btn btn-primary business-btn">Leave A Review</button>
        </div>
  </div> 
  )
}

BusinessDetailsCard.propTypes = {
    bus: PropTypes.shape(PropTypes.obj).isRequired,
};
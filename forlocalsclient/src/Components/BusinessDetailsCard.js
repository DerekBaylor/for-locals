import React from 'react'
import PropTypes from 'prop-types';

export default function BusinessDetailsCard({busObj}) {

  return (
    <div className="business-body">
        <div className='business-score bus-detail'>{busObj.reviewScore}</div>
        <div className="business-name bus-detail">{busObj.businessName}</div>
        <div className="business-owner bus-detail">{busObj.owner}</div>
        <div className="business-phone bus-detail">{busObj.phone}</div>
        <div className="business-address bus-detail">{busObj.address}</div>
        <div className="business-industry bus-detail">{busObj.industry}</div>
        <div className="business-text bus-detail">{busObj.description}</div>
  </div> 
  )
}

BusinessDetailsCard.propTypes = {
  busObj: PropTypes.shape(PropTypes.obj).isRequired,
};
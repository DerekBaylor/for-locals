import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BusinessIcon from '../Assets/BusinessIcon.png'

export default function FeatureBusinessCard({ card, setCards }) {

  return (
    <div className="featured-business-card">
    <div className="card-div-two">
      <img className="featured-card-img" src={BusinessIcon} alt="featured business" />
      <div className="card-body">
          <h5 className="card-title">{card.businessName}</h5>
          // <p className="card-text">{card.description}</p>
          {/* <h5 className="card-title">Business Name</h5>
          <p className="card-text">Description</p> */}
          <div className="card-btn-div">
            <button className="btn btn-primary card-btn">Details</button>
          </div>
      </div>
    </div>
  </div>
  )
};

FeatureBusinessCard.propTypes = {
  card: PropTypes.shape(PropTypes.obj).isRequired,
  setCards: PropTypes.func.isRequired,
};
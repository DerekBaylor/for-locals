import React from 'react'
import PropTypes from 'prop-types';
import BusinessIcon from '../Assets/BusinessIcon.png'

export default function BusinessCard({ card, setCards }) {
  return (
    <div className="business-card">
        <img className="card-img" src={BusinessIcon} alt="a business" />
        <div className="card-body">
            <div>Review Score Coming Soon</div>
            <h5 className="card-title">{card.businessName}</h5>
            <p className="card-text">{card.description}</p>
        <div className="card-btn-div">
          <a href="#" className="btn btn-success card-btn">Details</a>
        </div>
        </div>
    </div>
  )
};

BusinessCard.propTypes = {
  card: PropTypes.shape(PropTypes.obj).isRequired,
  setCards: PropTypes.func.isRequired,
};
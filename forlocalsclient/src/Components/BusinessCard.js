import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BusinessIcon from '../Assets/BusinessIcon.png'

export default function BusinessCard({ card }) {
  return (
    <div className="business-card">
        <img className="card-img" src={BusinessIcon} alt="a business" />
        <div className="card-body">
            <h5 className="card-title">{card.businessName}</h5>
            <p className="card-text">{card.description}</p>
        <div className="card-btn-div">
          <Link  to={`/businessDetails/${card.businessId}`} className='btn btn-success card-btn'>
            Details
          </Link>
        </div>  
        </div>
    </div>
  )
};

BusinessCard.propTypes = {
  card: PropTypes.shape(PropTypes.obj).isRequired,
};
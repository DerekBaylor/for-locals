import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BusinessIcon from '../Assets/BusinessIcon.png'

export default function FeatureBusinessCard({bus}) {

  return (
    <div className="featured-business-card">
    <div className="card-div-two">
      <img className="featured-card-img" src={BusinessIcon} alt="featured business" />
      <div className="card-body">
          <h5 className="card-title">{bus.businessName}</h5>
          <p className="card-text">{bus.description}</p>
          <div className="card-btn-div">
            <Link  to={`/businessDetails/${bus.businessId}`} className='btn btn-success card-btn'>
              Details
            </Link>
          </div>
      </div>
    </div>
  </div>
  )
};

FeatureBusinessCard.propTypes = {
  bus: PropTypes.shape(PropTypes.obj).isRequired,
};
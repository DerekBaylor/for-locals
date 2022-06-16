import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function BusinessManagerCard({ card }) {
    return (
        <div className="business-card">
            <img className="card-img" src={card.imgUrl} alt="a business" />
            <div className="card-body">
                <h5 className="card-title">{card.businessName}</h5>
                <p className="card-text">{card.description}</p>
            <div className="card-btn-div">
              <Link  to={`/businessManager/${card.businessId}`} className='btn btn-success card-btn'>
                Details
              </Link>
            </div>  
            </div>
        </div>
      )
    };
    
    BusinessManagerCard.propTypes = {
      card: PropTypes.shape(PropTypes.obj).isRequired,
    };
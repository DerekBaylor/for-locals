import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function BusinessManagerCard({ busData }) {
    return (
        <div className="business-profile-card">
            <img className="business-profile-img" src={busData.imgUrl} alt="a business" />
            <div className="card-body">
                <h5 className="bus-profile-card-title">{busData.businessName}</h5>
                <p className="card-text">{busData.description}</p>
            <div className="card-btn-div">
              <Link  to={`/businessManager/${busData.businessId}`} className='btn btn-success card-btn bus-details-btn'>
                DETAILS
              </Link>
            </div>  
            </div>
        </div>
      )
    };
    
    BusinessManagerCard.propTypes = {
      busData: PropTypes.shape(PropTypes.obj).isRequired,
    };
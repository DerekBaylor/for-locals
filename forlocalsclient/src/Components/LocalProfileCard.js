import React from 'react'
import PropTypes from 'prop-types';

export default function LocalProfileCard({ local }) {
  return (
    <div className="local-card">
        <div className="card-body">
          <img className="featured-card-img" src={local.imgUrl} alt="profile" />
            <h5 className="card-title">{local.name}</h5>
            <div className='card-descriptiong'>{local.bio}</div>
        </div>  
    </div>
  )
};

LocalProfileCard.propTypes = {
    local: PropTypes.shape(PropTypes.obj).isRequired,
  };
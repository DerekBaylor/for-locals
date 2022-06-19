import React from 'react'
import PropTypes from 'prop-types';

export default function LocalProfileCard({ local }) {
  return (
    <div className="local-card">
        <div className="local-card-body">
          <img className="local-card-img" src={local.imgUrl} alt="profile" />
            <div className="local-card-title">{local.name}</div>
            <div className='local-card-description'>{local.bio}</div>
        </div>  
    </div>
  )
};

LocalProfileCard.propTypes = {
    local: PropTypes.shape(PropTypes.obj).isRequired,
  };
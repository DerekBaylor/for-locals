import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import BusinessIcon from '../Assets/BusinessIcon.png'
import { getLocalById } from "../Data/LocalData";

export default function ReviewCard({reviewObj}) {
    const [localName, setLocalName] = useState({});

    useEffect(() => {
        getLocalById(reviewObj.userId).then(setLocalName)
    });

  return (
    <div className='review-card'>
        <img className="review-card-img" src={BusinessIcon} alt="featured business" />
        <div className="card-body">
            <h5 className="card-score">{reviewObj.score} Stars</h5>
            <h5 className="card-title">{reviewObj.reviewTitle}</h5>
            <p className="card-text">{reviewObj.reviewText}</p>
            <div className='card-review-id'>By: {localName.name}</div>
        </div>
    </div>
  )
};

ReviewCard.propTypes = {
    reviewObj: PropTypes.shape(PropTypes.obj).isRequired,
  };
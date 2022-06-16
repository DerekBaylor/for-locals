import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import BusinessIcon from '../Assets/BusinessIcon.png'
import { getLocalById } from "../Data/LocalData";
import { deleteReview, getReviewsByBusinessId } from "../Data/ReviewData";

export default function ReviewCard({ local, revObj, setEditItem, setReviews, busKey, setForm }) {
    const [localName, setLocalName] = useState({});
    const [buttons, setButtons] = useState(false);

    useEffect(() => {
        getLocalById(revObj.userId).then(setLocalName);
        showButtons();
        // console.warn('Rev Id',revObj.userId);
        // console.warn('Local Id', local.id);
    });

    const handleClick = (method) => {
      if (method === 'delete') {
        deleteReview(revObj.reviewId).then(() =>
         getReviewsByBusinessId(busKey).then(setReviews));
      } else if (method === 'edit') {
        setEditItem(revObj);
        setForm(true);
      };
    };

    const showButtons = () => {
      if (local === null) {
        setButtons(false);
      } else if  (revObj.userId === local.userId) {
        setButtons(true);
      } else {
        setButtons(false);
      };
    };

  return (
    <div className='review-card'>
        <img className="review-card-img" src={BusinessIcon} alt="featured business" />
        <div className="card-body">
            <h5 className="card-score">{revObj.score} Stars</h5>
            <h5 className="card-title">{revObj.reviewTitle}</h5>
            <p className="card-text">{revObj.reviewText}</p>
            <p className='card-review-id'>By: {localName.name}</p>
              {buttons ? (
            <div className="btn-div review-btn-div">
              <button 
                className='btn btn-dark'
                onClick={() => handleClick('edit')}
                >EDIT REVIEW
              </button>
              <button 
                className='btn btn-danger'
                onClick={() => handleClick('delete')}
                >
                DELETE REVIEW</button>
            </div>
              ) : (
                <div className='hidden-div'>Hidden Div</div>
              )}
        </div>
    </div>
  )
};

ReviewCard.propTypes = {
    revObj: PropTypes.shape(PropTypes.obj).isRequired,
    busKey: PropTypes.string.isRequired,
    setEditItem: PropTypes.func.isRequired,
    setReviews: PropTypes.func.isRequired,
    setForm: PropTypes.func.isRequired,
    local: PropTypes.shape(PropTypes.obj)
  };

  ReviewCard.defaultProps = {
    setEditItem: '',
    local: null,
  }
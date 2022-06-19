import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { getLocalById } from "../Data/LocalData";
import { deleteReview, getReviewsByBusinessId } from "../Data/ReviewData";

export default function ReviewCard({ local, revObj, setEditItem, setReviews, busKey, setForm, setShowRevBtn }) {
    const [localName, setLocalName] = useState({});
    const [buttons, setButtons] = useState(false);

    useEffect(() => {
      getLocalById(revObj.userId).then(setLocalName);
      showButtons();
    }, []);

    const handleClick = (method) => {
      if (method === 'delete') {
        deleteReview(revObj.reviewId).then(() =>
        getReviewsByBusinessId(busKey).then(setReviews));
      } else if (method === 'edit') {
        setEditItem(revObj);
        setForm(true);
        setShowRevBtn(false)
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
        <img className="review-card-img" src={revObj.imgUrl} alt="featured business" />
        <div className="review-card-body">
            <h5 className="review-card-score">{revObj.score} Stars</h5>
            <h5 className="review-card-title">{revObj.reviewTitle}</h5>
            <p className="review-card-text">{revObj.reviewText}</p>
            <p className='review-card-local-name'>Review By: {localName.name}</p>
              {buttons ? (
            <div className="btn-div review-btn-div align-self-end">
              <button 
                className='btn btn-dark review-btn rev-edit-btn'
                onClick={() => handleClick('edit')}
                >EDIT REVIEW
              </button>
              <button 
                className='btn btn-outline-danger review-btn rev-del-btn'
                onClick={() => handleClick('delete')}
                >
                DELETE REVIEW</button>
            </div>
              ) : (null)
              }
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
    local: PropTypes.shape(PropTypes.obj),
    setShowRevBtn:PropTypes.func.isRequired,
  };

  ReviewCard.defaultProps = {
    setEditItem: '',
    local: null,
  }
import React, { useEffect, useLayoutEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { getBusinessById } from '../Data/BusinessData';
import { useParams } from 'react-router-dom';
import BusinessDetailsCard from '../Components/BusinessDetailsCard';
import ReviewForm from '../Components/ReviewForm';
import ReviewCard from '../Components/ReviewCard';
import { getReviewsByBusinessId } from '../Data/ReviewData';
import { getLocalByFKey } from '../Data/LocalData';
import { updateBusinessScore } from '../Data/BusinessData';

export default function BusinessDetails({ local }) {
  const {id} = useParams();
  const [business, setBusiness] = useState({});
  const [owner, setOwner] = useState({});
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState(false);
  const [showRevBtn, setShowRevBtn] = useState(false);
  const [editItem, setEditItem] = useState();

  useLayoutEffect(() => {
    console.log('BusDet - ULE')
    getBusinessById(id).then(setBusiness);
    setShowRevBtn(true);
    getReviewsByBusinessId(id).then(setReviews);
  }, [id, form])
  
  useEffect(() => {
    console.log('BusDet UE')
    if (business.ownerKey){
      getLocalByFKey(business.ownerKey).then(setOwner)
    };
    getReviewsByBusinessId(id).then(setReviews);
  },[form]);

  useEffect(() => {
    updateReviewScore();
  }, [reviews]);
  
  const updateReviewScore = () => {
    console.log('reviewScore1', business.reviewScore)

    if (reviews.length === 0){
      console.log('reviewScore2', business.reviewScore)
          business.reviewScore = 0;

    } else if (reviews.length === 0 && business.reviewScore === 1){
      console.log('reviewScore3', business.reviewScore)
      business.reviewScore = 0;

    } else {
      console.log('reviewScore4', business.reviewScore)
      const [...revScore] = reviews.map((card) => card.score);
      console.log('reviewScore5', business.reviewScore)
      const scoreTotal = revScore.reduce((a, b) => a + b, 0);
      console.log('reviewScore6', business.reviewScore)
      const finalTotal = (scoreTotal / reviews.length);
      console.log('reviewScore5', business.reviewScore)
      const roundTotal = Math.round(finalTotal)
      console.log('reviewScore7', business.reviewScore)
      business.reviewScore = roundTotal;
      console.log('reviewScore8', business.reviewScore)
      updateBusinessScore(id, business).then(setBusiness);
    };
};

  const showFormAndBtn = () => {
    if(showRevBtn === true) {
      setShowRevBtn(false)
  } else {
    setShowRevBtn(true);
  };
    if(form === true) {
      setForm(false)
  } else {
    setForm(true);
  };
};

  return (
    <div className="main-body-div business-details-container">
      <div className="navbar-spacing"></div>
      <div className="business-body-div">
        <img className="business-details-img" src={business.imgUrl} alt="business" />
        <div className="business-details-card-conatiner">
          <BusinessDetailsCard busObj={business} owner={owner} />
        </div>  
      </div>
      <div className="main-review-div">
        <div className='review-header'>User Reviews</div>
        <hr className='hr'/>
        <div className='form-call-btn-div'>
          {local && showRevBtn ? (
            <button className='btn btn-outline-success' onClick={showFormAndBtn}>LEAVE A REVIEW</button>
          ) : (null)
          }
        </div>
        <div className='review-form-container'>
        {
          form?   <div><ReviewForm 
                    local = {local}
                    editItem = {editItem}
                    setEditItem = {setEditItem}
                    setReviews = {setReviews}
                    form = {form}
                    setForm = {setForm}
                    setShowRevBtn = {setShowRevBtn}
                    />  
                  </div>:null
        }
      </div>
          <div className='review-card-container'>
            {reviews.map((revObj) => {
              return (
                <ReviewCard 
                key={revObj.reviewId}
                revObj={revObj} 
                busKey = {id}
                local = {local}
                setEditItem = {setEditItem}
                setReviews = {setReviews}
                setForm = {setForm}
                setShowRevBtn = {setShowRevBtn}
                />
              )
            })}
          </div>
      </div>
    </div> 
  )
};

BusinessDetails.propTypes = {
  local: PropTypes.shape(PropTypes.obj),
};

BusinessDetails.defaultProps = {
  local: null,
};


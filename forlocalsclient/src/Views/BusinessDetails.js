import React, { useEffect, useLayoutEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { getBusinessById } from '../Data/BusinessData';
import { useParams } from 'react-router-dom';
import BusinessDetailsCard from '../Components/BusinessDetailsCard';
import ReviewForm from '../Components/ReviewForm';
import ReviewCard from '../Components/ReviewCard';
import { getReviewsByBusinessId } from '../Data/ReviewData';
import { getLocalByFKey } from '../Data/LocalData';
// import { updateBusinessScore } from '../Data/BusinessData';

export default function BusinessDetails({ local }) {
  const {id} = useParams();
  const [business, setBusiness] = useState({});
  const [owner, setOwner] = useState({});
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState(false);
  const [showRevBtn, setShowRevBtn] = useState(false);
  const [editItem, setEditItem] = useState();
  // const [reviewScore, setReviewScore] = useState();
  // const [updateScore, setUpdateScore] = useState();

  useLayoutEffect(() => {
    getBusinessById(id).then(setBusiness);
    setShowRevBtn(true);
  }, [id])

  useEffect(() => {
    getReviewsByBusinessId(id).then(setReviews);
    // if (reviews) {
    //   getScore();
    // }

    if (business.ownerKey){
      getLocalByFKey(business.ownerKey).then(setOwner)
    };
  },[business]);
  

//   const getScore = () => {
//     console.warn('getScore called');
//     // getReviewsByBusinessId(id).then(setReviews);
//     const [...revScore] = reviews.map((card) => card.score);
//     const scoreTotal = revScore.reduce((a, b) => a + b, 0);
//     const finalTotal = (scoreTotal / reviews.length);
//     setReviewScore(finalTotal);
//     business.reviewScore = finalTotal;
//     updateBusinessScore(id, business).then(() => {
//       setUpdateScore(updateScore + 1);
//   });
//   console.warn('GET SCORE: update Score', updateScore)
// };

  const showButton = () => {
    if(showRevBtn === true) {
        setShowRevBtn(false)
    } else {
      setShowRevBtn(true);
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


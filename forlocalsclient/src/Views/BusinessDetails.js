import React, { useEffect, useState } from 'react'
import BusinessIcon from '../Assets/BusinessIcon.png'
import { getBusinessById } from '../Data/BusinessData';
import { useParams } from 'react-router-dom';
import BusinessDetailsCard from '../Components/BusinessDetailsCard';
import ReviewForm from '../Components/ReviewForm';
import ReviewCard from '../Components/ReviewCard';
import { getReviewsByBusinessId } from '../Data/ReviewData';

export default function BusinessDetails() {
  const [business, setBusiness] = useState({});
  const [reviews, setReviews] = useState([]);
  const {key} = useParams();
  
  useEffect(() => {
    getBusinessById(key).then(setBusiness)
    getReviewsByBusinessId(key).then(setReviews)
  }, []);




  return (
    <div className="main-body-div">
      <div className="navbar-spacing"></div>
      <div className="business-body-div">
        <img className="business-img" src={BusinessIcon} alt="business" />
        <div className='business-spacing'></div>
        <div className="business-body">
          <BusinessDetailsCard busObj={business} />
        </div>  
      </div>
      <div className="main-review-div">
        <div className='review-header'>User Reviews</div>
        <hr className='hr'/>
        <div className="reivew-card-div">
          <ReviewForm busObj={business} />
          <div className='review-card-container'>
            {reviews.map((rev) => {
              return (
                <ReviewCard 
                reviewObj={rev} 
                key = {rev.reviewId}
                />
              )
            })}
          </div>
        </div>
      </div>

    </div> 
  )
};


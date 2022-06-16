import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import BusinessIcon from '../Assets/BusinessIcon.png'
import { getBusinessById } from '../Data/BusinessData';
import { useParams } from 'react-router-dom';
import BusinessDetailsCard from '../Components/BusinessDetailsCard';
import ReviewForm from '../Components/ReviewForm';
import ReviewCard from '../Components/ReviewCard';
import { getReviewsByBusinessId } from '../Data/ReviewData';

export default function BusinessDetails({ local }) {
  const {id} = useParams();
  const [business, setBusiness] = useState({});
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState(false);
  const [editItem, setEditItem] = useState();

  useEffect(() => {
    getBusinessById(id).then(setBusiness);
    getReviewsByBusinessId(id).then(setReviews);
    console.warn('View State Updated')
  }, [editItem, id]);

  const showForm = () => {
    if(form === true) {
      setForm(false)
  } else {
    setForm(true);
  }
};

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
        <div>
          {local ? (
            <button className='btn btn-outline-success' onClick={showForm}>LEAVE A REVIEW</button>
          ) : (
            <div className='hidden-div'>Hidden Div</div>
          )}
        </div>
        <div className='form-container'>
        {
          form?   <div><ReviewForm 
                    local = {local}
                    editItem = {editItem}
                    setEditItem = {setEditItem}
                    setReviews = {setReviews}
                    setForm = {setForm}
                    />  
                  </div>:null
        }
      </div>
        <div className="reivew-card-div">
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
                />
              )
            })}
          </div>
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


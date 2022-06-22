import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Form, FormGroup, Button, Input } from 'reactstrap';
import { addReview, updateReview, getReviewsByBusinessId } from "../Data/ReviewData";

const initialState = {
  userId: '',
  businessId: '',
  reviewTitle: '',
  reviewText: '',
  imgUrl: '',
  score: '',
};
export default function ReviewForm({ local, editItem, setEditItem, setReviews, form, setForm, setShowRevBtn }) {
  const {id} = useParams();
  const [formInput, setFormInput] = useState(initialState);

  const newState = () => {
    const formData = {
      userId: local.userId,
      businessId: id,
      reviewTitle: '',
      reviewText: '',
      imgUrl: '',
      score: '',
    }
    setFormInput(formData)
  };

  useEffect(() => {
    if (editItem === null) {
      newState();
    } else {
      setFormInput(editItem)
    }
    getReviewsByBusinessId(id).then(setReviews);
  }, [editItem, form]);


  function handleChange(e) {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  const resetForm = () => {
    setFormInput(initialState);
    setEditItem(null);
    setForm(false);
    setShowRevBtn(true);
  };  
    
  const min = 1;
  const max = 5;

  const handleSubmit = (e) => {
    e.preventDefault();

    if(formInput.score > max){
      formInput.score = max;
    } else if (formInput.score < min) {
      formInput.score = min;
    };
    
    if (editItem === null) {
      addReview(formInput, id).then(setReviews);
      setEditItem(null);
    } else if (editItem != null){
      updateReview(editItem.reviewId, formInput, id).then(setReviews)
      setEditItem(null);
    };
    setForm(false);
    setEditItem(null);
    setShowRevBtn(true);
  };

  return (
    <Form className='form form-container'>
      <FormGroup className='form-group'>
          <Input className='rev-form-score' type="number" name="score" id="score" placeholder="Score: (1-5)" 
          value={formInput.score} max="5" onChange={handleChange} />
      </FormGroup>
      <FormGroup className='form-group'>
          <Input className='rev-form-imgUrl' type="url" name="imgUrl" id="imgUrl" placeholder="Add Image By Url:" value={formInput.imgUrl || ""} onChange={handleChange} />
      </FormGroup>
      <FormGroup className='form-group'>
          <Input className='rev-form-reviewTitle' type="text" name="reviewTitle" id="reviewTitle" placeholder="Title:" value={formInput.reviewTitle || ""} onChange={handleChange} />
      </FormGroup>
      <FormGroup className='form-group'>
          <Input className='rev-form-review-text' type="textarea" name="reviewText" id="reviewText" placeholder="Review:" value={formInput.reviewText || ""} onChange={handleChange} />
      </FormGroup>
      <div className='hidden-div'>
        <FormGroup className='form-group'>
            <Input type="number" name="businessId" id="businessId" placeholder="businessId:" value={formInput.businessId} onChange={handleChange} />
        </FormGroup>
        <FormGroup className='form-group'>
            <Input type="number" name="userId" id="userId" placeholder="userId:" value={formInput.userId} onChange={handleChange} />
        </FormGroup>
      </div>
      <Button className='btn-outline-success submit-rev-form-btn
      rev-form-btns' onClick={handleSubmit}>{editItem ? 'SUBMIT CHANGES' : 'ADD REVIEW'}</Button>
      <Button className='btn-success cancel-rev-form-btn rev-form-btns' onClick={resetForm}>CANCEL</Button>
    </Form>
  )
}

ReviewForm.propTypes = {
  local: PropTypes.shape(PropTypes.obj).isRequired,
  editItem: PropTypes.shape(PropTypes.obj),
  setEditItem: PropTypes.func.isRequired,
  setReviews: PropTypes.func.isRequired,
  form: PropTypes.bool.isRequired,
  setForm: PropTypes.func.isRequired,
  formInput: PropTypes.func.isRequired,
  setFormInput: PropTypes.func.isRequired,
  setShowRevBtn: PropTypes.func.isRequired,
};

ReviewForm.defaultProps = {
  editItem: null,
};
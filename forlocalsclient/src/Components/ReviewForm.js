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
  score: 0,
};
export default function ReviewForm({ local, editItem, setEditItem, setReviews, setForm }) {
  const {id} = useParams();
  const [formInput, setFormInput] = useState(initialState);

  const newState = () => {
    const formData = {
      userId: local.userId,
      businessId: id,
      reviewTitle: '',
      reviewText: '',
      imgUrl: '',
      score: 0,
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
    console.warn('Form State Update')
  }, [editItem]);

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
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editItem === null) {
          addReview(formInput, id).then(setReviews);
          setEditItem(null);
          setForm(false);
        } else if (editItem != null){
          updateReview(editItem.reviewId, formInput, id).then(setReviews)
          setEditItem(null);
          setForm(false);
        }
    };

  return (
    <Form className='form form-container'>
      <FormGroup className='form-group'>
          <Input type="number" name="score" id="score" placeholder="Score: (0-5)" 
          value={formInput.score || 0} onChange={handleChange} />
      </FormGroup>
      <FormGroup className='form-group'>
          <Input type="url" name="imgUrl" id="imgUrl" placeholder="Add Image By Url:" value={formInput.imgUrl || ""} onChange={handleChange} />
      </FormGroup>
      <FormGroup className='form-group'>
          <Input type="text" name="reviewTitle" id="reviewTitle" placeholder="Title:" value={formInput.reviewTitle || ""} onChange={handleChange} />
      </FormGroup>
      <FormGroup className='form-group'>
          <Input type="text" name="reviewText" id="reviewText" placeholder="Review:" value={formInput.reviewText || ""} onChange={handleChange} />
      </FormGroup>
      <div className='hidden-div'>
        <FormGroup className='form-group'>
            <Input type="number" name="businessId" id="businessId" placeholder="businessId:" value={formInput.businessId} onChange={handleChange} />
        </FormGroup>
        <FormGroup className='form-group'>
            <Input type="number" name="userId" id="userId" placeholder="userId:" value={formInput.userId} onChange={handleChange} />
        </FormGroup>
      </div>
      <Button className='btn-success form-btn' onClick={handleSubmit}>{editItem ? 'Submit Changes' : 'Add Review'}</Button>
      <Button className='btn-warn form-btn' onClick={resetForm}>Cancel</Button>
    </Form>
  )
}

ReviewForm.propTypes = {
  local: PropTypes.shape(PropTypes.obj).isRequired,
  editItem: PropTypes.shape(PropTypes.obj),
  setEditItem: PropTypes.func.isRequired,
  setReviews: PropTypes.func.isRequired,
  setForm: PropTypes.func.isRequired,
  formInput: PropTypes.func.isRequired,
  setFormInput: PropTypes.func.isRequired,
};

ReviewForm.defaultProps = {
  editItem: null,
};
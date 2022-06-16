import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Form, FormGroup, Button, Input } from 'reactstrap';
import { addReview, updateReview } from "../Data/ReviewData";

const initialState = {
  userId: '',
  businessId: '',
  reviewTitle: '',
  reviewText: '',
  imgUrl: '',
  score: 0,
};
export default function ReviewForm({ local, editItem, setReviews }) {
    const {id} = useParams();
    const [formInput, setFormInput] = useState(initialState);

  const newState = () => {
    const formData = {
      userId: local.userId,
      businessId: id,
      reviewTitle: 'test',
      reviewText: 'test',
      imgUrl: 'test',
      score: 0,
    }
    setFormInput(formData)
  };
  

  useEffect(() => {
    if (editItem.reviewId) {
      setFormInput(editItem)
      console.warn('Edit Item Set')
    } else {
      newState();
      console.warn("New State")
    }
  }, []);

  const handleChange = (e) => {
    setFormInput((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
    }));
  };

  const resetForm = () => {
      setFormInput(newState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editItem.reviewId) {
          updateReview(editItem.reviewId, formInput, id).then(setReviews);
        } else {
          addReview(formInput, id).then(() => {
            console.warn('Review Sent');
          })
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
      <FormGroup className='form-group'>
          <Input type="number" name="businessId" id="businessId" placeholder="businessId:" value={formInput.businessId} onChange={handleChange} />
      </FormGroup>
      <FormGroup className='form-group'>
          <Input type="number" name="userId" id="userId" placeholder="userId:" value={formInput.userId} onChange={handleChange} />
      </FormGroup>
      <Button className='btn-success form-btn' onClick={handleSubmit}>Submit Changes</Button>
      <Button className='btn-warn form-btn' onClick={resetForm}>Clear Form</Button>
    </Form>
  )
}

ReviewForm.propTypes = {
  local: PropTypes.shape(PropTypes.obj).isRequired,
  revObj: PropTypes.shape(PropTypes.obj).isRequired,
  editItem: PropTypes.shape(PropTypes.obj),
  setEditItem: PropTypes.func.isRequired,
  setReviews: PropTypes.func.isRequired,
};

ReviewForm.defaultProps = {
  editItem: null,
};
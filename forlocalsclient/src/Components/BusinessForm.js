import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Button, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { addBusiness, updateBusiness } from '../Data/BusinessData';
import { useParams } from 'react-router-dom';

const initialState = {
    businessName: '',
    phone: '',
    address: '',
    webUrl: '',
    industry: '',
    keywords: '',
    description: '',
    imgUrl: '',
    stateControlNum: '',
    ownerKey: '',
    reviewScore: 0,
    verified: '',
}; 
export default function BusinessForm({ bus }) {
  const [formInput, setFormInput] = useState(initialState);
  const {id} = useParams();
  const {firebaseKey} = useParams();
  const [key, setKey] = useState();
  
  const addKey = () => {
    const State = {
      businessName: '',
      phone: '',
      address: '',
      webUrl: '',
      industry: '',
      keywords: '',
      description: '',
      imgUrl: '',
      stateControlNum: '',
      ownerKey: firebaseKey,
      reviewScore: 0,
      verified: 'N',
      logo: '',
    }
    console.warn('state', State)
    setFormInput(State)
  }

  useEffect(() => {
    if(id){
      setKey(bus.ownerKey);
      setFormInput(bus);
    } else {
      addKey();
    }
}, []);

const handleChange = (e) => {
  setFormInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
  }));
};

const resetForm = () => {
  setFormInput(initialState)
};

const handleSubmit = (e) => {
  e.preventDefault();
  if(id) {
    updateBusiness(id, formInput, key).then(() => {
        resetForm(); 
      })
  } else  {
    addBusiness(formInput, firebaseKey).then(() => {
      resetForm();
    })
  }
};

const warn = () => {
  console.warn('bus', bus)
  console.warn('key', key)
};

  return (
    <Form>
      <FormGroup>
          <Input type="url" name="imgUrl" id="imgUrl" placeholder="Img Url:" value={formInput.imgUrl || ""} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
          <Input type="text" name="stateControlNum" id="stateControlNum" placeholder="state Control Number:" value={formInput.stateControlNum || ""} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
          <Input type="text" name="businessName" id="businessName" placeholder="Business Name:" value={formInput.businessName || ""} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
          <Input type="text" name="phone" id="phone" placeholder="Phone:" value={formInput.phone || ""} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
          <Input type="text" name="address" id="address" placeholder="Address:" value={formInput.address || ""} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
          <Input type="url" name="webUrl" id="webUrl" placeholder="Website:" value={formInput.webUrl || ""} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
          <Input type="text" name="industry" id="industry" placeholder="Industry:" value={formInput.industry || ""} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
          <Input type="text" name="keywords" id="keywords" placeholder="Keywords:" value={formInput.keywords || ""} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
          <Input type="text" name="description" id="description" placeholder="Description:" value={formInput.description || ""} onChange={handleChange} />
      </FormGroup>
        <FormGroup className='hidden owner-key' >
            <Input type="text" name="ownerKey" id="ownerKey" placeholder="Owner Key:" value={formInput.ownerKey} onChange={handleChange} />
        </FormGroup>
        <FormGroup className='hidden owner-key' >
            <Input type="text" name="reviewScore" id="reviewScore" placeholder="Review Score:" value={formInput.reviewScore} onChange={handleChange} />
        </FormGroup>
        <FormGroup className='hidden owner-key' >
            <Input type="text" name="verified" id="verified" placeholder="Verified:" value={formInput.verified} onChange={handleChange} />
        </FormGroup>
        <FormGroup className='hidden owner-key' >
            <Input type="text" name="logo" id="logo" placeholder="Logo:" value={formInput.logo} onChange={handleChange} />
        </FormGroup>
      <Button className='btn-success form-btn' onClick={handleSubmit}>{id ? 'Submit Changes' : 'Create Business'}</Button>
    </Form>
  )
}

BusinessForm.propTypes = {
  bus: PropTypes.shape(PropTypes.obj),
};

BusinessForm.defaultProps = {
  bus: null,
};
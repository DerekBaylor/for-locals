import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Button, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { addBusiness,getBusinessById, updateBusiness } from '../Data/BusinessData';
import { useParams, useNavigate } from 'react-router-dom';

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
export default function BusinessForm({ bus, setBus, setForm, setPgBreak }) {
  const [formInput, setFormInput] = useState(initialState);
  const {id} = useParams();
  const {firebaseKey} = useParams();
  const [key, setKey] = useState();
  let navigate = useNavigate();
  
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
    };
    setFormInput(State)
  };

  useEffect(() => {
    if(id){
      setKey(bus.ownerKey);
      setFormInput(bus);
    } else {
      addKey();
    };
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
        getBusinessById(id).then(setBus);
      })
  } else  {
    addBusiness(formInput, firebaseKey).then(() => {
      resetForm();
      navigate(-1);
    })
  }
  setForm(false);
  setPgBreak(false);
};

  return (
    <Form className='bus-profile-form'>
      <FormGroup>
          <Input className='bus-prof-url' type="url" name="imgUrl" id="imgUrl" placeholder="Img Url:" value={formInput.imgUrl || ""} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
          <Input className='bus-prof-businessName' type="text" name="businessName" id="businessName" placeholder="Business Name:" value={formInput.businessName || ""} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
          <Input className='bus-prof-stateControlNum' type="text" name="stateControlNum" id="stateControlNum" placeholder="state Control Number:" value={formInput.stateControlNum || ""} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
          <Input className='bus-prof-phone' type="text" name="phone" id="phone" placeholder="Phone:" value={formInput.phone || ""} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
          <Input className='bus-prof-address' type="text" name="address" id="address" placeholder="Address:" value={formInput.address || ""} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
          <Input className='bus-prof-webUrl' type="url" name="webUrl" id="webUrl" placeholder="Website:" value={formInput.webUrl || ""} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
          <Input className='bus-prof-industry' type="text" name="industry" id="industry" placeholder="Industry:" value={formInput.industry || ""} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
          <Input className='bus-prof-keywords' type="text" name="keywords" id="keywords" placeholder="Keywords:" value={formInput.keywords || ""} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
          <Input className='bus-prof-description' type="textarea" name="description" id="description" placeholder="Description:" value={formInput.description || ""} onChange={handleChange} />
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
      <Button className='btn-success form-btn bus-prof-form-btn' onClick={handleSubmit}>{id ? 'Submit Changes' : 'Create Business'}</Button>
    </Form>
  )
}

BusinessForm.propTypes = {
  bus: PropTypes.shape(PropTypes.obj),
  setBus: PropTypes.func,
  setForm: PropTypes.func,
  setPgBreak: PropTypes.func,
};

BusinessForm.defaultProps = {
  bus: null,
  setBus: null,
  setForm: null,
  setPgBreak: null,
};
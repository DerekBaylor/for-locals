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
} 

export default function BusinessForm({ bus }) {
  const [formInput, setFormInput] = useState(initialState);
  const {id} = useParams();
  const [key, setKey] = useState();

  useEffect(() => {
    if(bus.businessId != null){
      setKey(bus.ownerKey);
      setFormInput(bus);
    } else {
      setFormInput(initialState)
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
    console.warn('Submitted Data:', id, formInput, key);
    updateBusiness(id, formInput, key).then(() => {
        resetForm(); 
      })
      console.warn('Busienss Updated')
  } else  {
    addBusiness({ ...formInput }).then(() => {
      resetForm();
    })
    console.warn("Business Added");
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
          <Input type="text" name="stateControlNum" id="stateControlNum" placeholder="State Control Number:" value={formInput.address || ""} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
          <Input type="text" name="description" id="description" placeholder="Description:" value={formInput.description || ""} onChange={handleChange} />
      </FormGroup>
      <Button className='btn-success form-btn' onClick={handleSubmit}>{id ? 'Submit Changes' : 'Create Business'}</Button>

      <Button className='btn btn-warning' onClick={warn}>Bus Info</Button>
    </Form>
  )
}

BusinessForm.propTypes = {
  bus: PropTypes.shape(PropTypes.obj),
};

BusinessForm.defaultProps = {
  bus: null,
};
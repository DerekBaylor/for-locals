import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Button, Input } from 'reactstrap';
import PropTypes from 'prop-types';

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
  const [formInput, setFormInput] = useState(initialState)

  return (
    <div>BusinessForm</div>
  )
}

BusinessForm.propTypes = {
  obj: PropTypes.shape(PropTypes.obj).isRequired,
};

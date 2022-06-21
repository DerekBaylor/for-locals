import React from 'react'
import PropTypes from 'prop-types';
import BusinessForm from '../Components/BusinessForm'

export default function AddBusiness(count, setcount) {

  return (
    <div className='main-body-div'>
    <div className='navbar-spacing'></div>
    Add Your Business
        <BusinessForm 
          count={count}
          setcount={setcount}
        />
    </div>
  )
}

AddBusiness.propTypes = {
  count: PropTypes.number.isRequired,
  setcount: PropTypes.func.isRequired,
};
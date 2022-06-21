import React from 'react'
import PropTypes from 'prop-types';
import BusinessForm from '../Components/BusinessForm'

export default function AddBusiness(count, setcount) {

  return (
    <div className='main-body-div add-business-container'>
      <div className='navbar-spacing'></div>
      <div className='add-bus-title'>ADD YOUR BUSINESS</div>
      <div className='add-bus-form-container'>
        <BusinessForm 
          count={count}
          setcount={setcount}
        />
      </div>
    </div>
  )
}

AddBusiness.propTypes = {
  count: PropTypes.number.isRequired,
  setcount: PropTypes.func.isRequired,
};
import React from 'react'
import BusinessForm from '../Components/BusinessForm'

export default function AddBusiness() {

  return (
    <div className='main-body-div add-business-container'>
      <div className='navbar-spacing'></div>
      <div className='add-bus-title'>ADD YOUR BUSINESS</div>
      <div className='add-bus-form-container'>
        <BusinessForm />
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BusinessForm from '../Components/BusinessForm'

export default function AddBusiness() {
    const { firebaseKey } = useParams();

  return (
    <div className='main-body-div'>
    <div className='navbar-spacing'></div>
    Add Business
        <BusinessForm />
    </div>
  )
}

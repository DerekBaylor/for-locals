import React, { useEffect, useState } from 'react'
import { getBusinessById } from '../Data/BusinessData';
import { useParams } from 'react-router-dom';
import BusinessForm from '../Components/BusinessForm';

export default function BusinessProfileDetails() {
    const [business, setBusiness] = useState({});
    const {id} = useParams();
    const [form, setForm] = useState(false);


    useEffect(() => {
        getBusinessById(id).then(setBusiness)
      }, []);

      const warn = () => {
        console.warn('business', business)
      };

  return (
    <div className='main-body-div'>
        <div className='navbar-spacing'></div>
        <div className='navbar-spacing'></div>
        <div className='business-container'>
            <img className="bus-img" src={business.imgUrl} alt="a business" />
            <div className='business-info'>
                <p className='b-title'>{business.businessName}</p>
                <p className='b-text'>{business.phone || 'Add Phone'}</p>
                <p className='b-text'>{business.address}</p>
                <p className='b-text'>{business.webUrl}</p>
                <p className='b-text'>{business.industry}</p>
                <p className='b-text'>{business.keywords}</p>
                <p className='b-text text'>{business.description}</p>
                <p className='b-text text'>{business.stateControlNum}</p>
            </div>
        </div>
        <div className='btn-container'>
        <button className='btn btn-success' onClick={()=> setForm(true) }>Edit Profile</button>
        </div>
        <div className='form-container'>
        {
          form?<div><BusinessForm bus={business}/></div>:null
        }
      </div>
    </div>
  )
}

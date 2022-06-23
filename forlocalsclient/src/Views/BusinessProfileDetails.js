import React, { useEffect, useState } from 'react'
import { getBusinessById } from '../Data/BusinessData';
import { useParams } from 'react-router-dom';
import BusinessForm from '../Components/BusinessForm';

export default function BusinessProfileDetails() {
    const [business, setBusiness] = useState({});
    const {id} = useParams();
    const [form, setForm] = useState(false);
    const [pgBreak, setPgBreak] =useState(false);

  useEffect(() => {
      getBusinessById(id).then(setBusiness);
    }, [id, form, pgBreak]);

  const showFormAndBreak = () => {
    if(form === true) {
      setForm(false)
  } else {
    setForm(true);
  }
  if(pgBreak === true) {
    setPgBreak(false)
  } else {
    setPgBreak(true);
  }
};

  return (
    <div className='main-body-div business-profile-details-container'>
        <div className='business-profile-container'>
            <div className='business-profile-info'>
                <p className='b-text b-title'>{business.businessName}</p>
                <p className='b-text'>{business.stateControlNum}</p>
                <p className='b-text'>{business.phone}</p>
                <p className='b-text'>{business.address}</p>
                <p className='b-text card-link'>{business.webUrl}</p>
                <p className='b-text'>{business.industry}</p>
                <p className='b-text'>{business.keywords}</p>
                <div>
                  <img className="bus-img" src={business.imgUrl} alt="a business" />
                </div>
                <p className='b-text b-description'>{business.description}</p>
            </div>
            <div className='bus-profile-btn-container'>
              <button className='btn btn-success bus-prof-btn' onClick={showFormAndBreak}>
                EDIT BUSINESS
              </button>
            </div>
        </div>
        <div className='form-break-container'>
            { pgBreak ? (
              <hr className='bus-profile-verticle-break1'></hr>
              ) : ( <hr className='bus-profile-verticle-break2'></hr> )
            }
            <div className='bus-profile-form-container'>
            { form ? (  <div>
                          <BusinessForm 
                            bus={business} 
                            setBus={setBusiness}
                            form={form} 
                            setForm={setForm} 
                            setPgBreak={setPgBreak} 
                            />
                        </div> ) : ( null )
            }
            </div>
        </div>
    </div>
  )
}
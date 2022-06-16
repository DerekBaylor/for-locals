
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LocalProfileCard from '../Components/LocalProfileCard';
import { getLocalByFKey } from '../Data/LocalData';
import LocalProfileForm from '../Components/LocalProfileForm';

export default function LocalProfile() {
  const [profile, setProfile] = useState({});
  const { firebaseKey } = useParams();
  const [form, setForm] = useState(false);

  useEffect(() => {
    getLocalByFKey(firebaseKey).then(setProfile)
  }, [profile]);
 
  const warn = () => {
    console.warn('profile', profile)
  };

  const showForm = () => {
    if(form === true) {
      setForm(false)
  } else {
    setForm(true);
  }
};

  return (
    <div className='main-body-div'>
      <div className='navbar-spacing'></div>
      <div className='navbar-spacing'></div>
      <div className='profile-container'>
        <LocalProfileCard local={profile} />
      </div>
      <div className='btn-container'>
        <button className='btn btn-success' onClick={showForm}>Edit Profile</button>
      </div>
      <div className='form-container'>
        {
          form?<div><LocalProfileForm 
                        local={profile}
                        setForm={setForm}
                        />
              </div>:null
        }
      </div>
    </div>
  )
}

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
  }, []);
 
  const warn = () => {
    console.warn('profile', profile)
  };

  return (
    <div className='main-body-div'>
      <div className='navbar-spacing'></div>
      <div className='navbar-spacing'></div>
      <div className='profile-container'>
        <LocalProfileCard local={profile} />
      </div>
      <div className='btn-container'>
        <button className='btn btn-success' onClick={()=> setForm(true) }>Edite Profile</button>
        <hr />
        <button className='btn btn-warning' onClick={warn}>
          Warn
        </button>
      </div>
      <div className='form-container'>
        {
          form?<div><LocalProfileForm local={profile}/></div>:null
        }
      </div>
    </div>
  )
}

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LocalProfileCard from '../Components/LocalProfileCard';
import { getLocalByFKey } from '../Data/LocalData';
import LocalProfileForm from '../Components/LocalProfileForm';

export default function LocalProfile() {
  const [profile, setProfile] = useState({});
  const { firebaseKey } = useParams();
  const [form, setForm] = useState(false);
  const [pgBreak, setPgBreak] =useState(false);

  useEffect(() => {
    getLocalByFKey(firebaseKey).then(setProfile)
  }, [form]);

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
    <div className='main-body-div profile-view-container'>
      <div className='profile-div-1'>
        <div className='profile-card-container'>
          <LocalProfileCard local={profile} />
        </div>
        <div className='profile-btn-container'>
          <button className='btn btn-success edit-profile-btn' onClick={showFormAndBreak}>EDIT PROFILE</button>
        </div>
      </div>
      <div className='profile-div-2'>
        { pgBreak ? (
            <hr className='profile-verticle-break1'></hr>
          ):<hr className='profile-verticle-break2'></hr>
        }
        <div>
          {
            form?<div className='profile-form-container'>
                    <div className='local-form-div'>
                      <LocalProfileForm S
                                  local={profile}
                                  form={form}
                                  setForm={setForm}
                                  setPgBreak={setPgBreak}
                                  />
                    </div>
                </div>:null
          }
        </div>
      </div>
    </div>
  )
}
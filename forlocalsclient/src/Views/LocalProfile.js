
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import LocalProfileCard from '../Components/LocalProfileCard';
import { getLocalByFKey } from '../Data/LocalData';

export default function LocalProfile({ local }) {
  const [profile, setProfile] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getLocalByFKey(firebaseKey).then(setProfile)
  }, []);
 
  const warn = (local) => {
    console.warn('profile', profile)
    console.warn('local', {local})
  };

  return (
    <div className='main-body-div'>
     <div className='navbar-spacing'></div>
     <div className='navbar-spacing'></div>
       <LocalProfileCard local={profile} />
      <button onClick={warn}>
       Warn
      </button>
    </div>
  )
}

LocalProfile.propTypes = {
  local: PropTypes.shape(PropTypes.obj).isRequired,
};
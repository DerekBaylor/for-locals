import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import BusinessDetails from '../Views/BusinessDetails';
import BusinessProfile from '../Views/BusinessProfile';
import Home from '../Views/Home';
import LocalProfile from '../Views/LocalProfile';
import Login from '../Views/Login';
import Search from '../Views/Search';

export default function Routing({ local }){
    return(
        <>
            <Routes>
                <Route path="/"  element={<Home local={local}/>} />
                <Route path="/search"  element={<Search local={local}/>} />
                <Route path="/businessDetails/:key"  element={<BusinessDetails local={local}/>} />
                <Route path="/login"  element={<Login local={local}/>} />
                <Route path="/businessProfile"  element={<BusinessProfile local={local}/>} />
                <Route path="/localProfile/:firebaseKey" local={local} element={local ? <LocalProfile /> : <Login />} />           
            </Routes>
        </>
    )
}

Routing.propTypes = {
    local: PropTypes.shape(PropTypes.obj),
  };
  
Routing.defaultProps = {
    local: null,
  };
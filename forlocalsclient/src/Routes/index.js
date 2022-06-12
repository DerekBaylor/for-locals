import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BusinessDetails from '../Views/BusinessDetails';
import BusinessProfile from '../Views/BusinessProfile';
import Home from '../Views/Home';
import LocalProfile from '../Views/LocalProfile';
import Login from '../Views/Login';
import Search from '../Views/Search';

export default function Routing({local}){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/businessDetails/:key" element={<BusinessDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/businessProfile" element={<BusinessProfile />} />
                <Route path="/localProfile" element={<LocalProfile />} />           
            </Routes>
        </>
    )
}
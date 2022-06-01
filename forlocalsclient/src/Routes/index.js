import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BusinessDetails from '../Views/BusinessDetails';
import BusinessProfile from '../Views/BusinessProfile';
import Home from '../Views/Home';
import LocalProfile from '../Views/LocalProfile';
import Search from '../Views/Search';

export default function Routing(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/businessDetails" element={<BusinessDetails />} />
                <Route path="/businessProfile" element={<BusinessProfile />} />
                <Route path="/localProfile" element={<LocalProfile />} />           
            </Routes>
        </>
    )
}
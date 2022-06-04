import React from 'react'
import BusinessCard from '../Components/BusinessCard'
import SerachBar from '../Components/SerachBar'

export default function Search() {
  return (
    <div className='main-body-div'>
    <div className='navbar-spacing'></div>
    <div className='search-bar-div'>
      <SerachBar />
    </div>
    <div className='card-div'>
      <BusinessCard />
    </div>
  </div>
  )
}

import React from 'react'
import './MainContent.css'
import MainPost from './MainPost'
import SideNav from './SideNav'

const MainContent = ( { isMapLoaded } ) => {
  return (
    <div className='post__container'>
      <SideNav />
      <MainPost isMapLoaded={isMapLoaded}/>      
    </div>
  )
}

export default MainContent
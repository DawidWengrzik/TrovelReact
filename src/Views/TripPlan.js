import React from 'react'
import SideNav from '../Components/MainContent/SideNav';
import TripPlanContent from '../Components/TripPlan/TripPlanContent';
import "../Components/MainContent/MainContent.css"

const TripPlan = ({ isMapLoaded }) => {

  return (
    <div className='trip-plan__container'>
      <SideNav />
      <TripPlanContent isMapLoaded={isMapLoaded}/>    
    </div>
  )
}

export default TripPlan
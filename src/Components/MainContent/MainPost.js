import React from 'react'

import { IoMdHeartEmpty } from 'react-icons/io';
import { GoogleMap } from '@react-google-maps/api'
import turtle1 from '../../images/zluw1.jpg'
import turtle2 from '../../images/zluw2.jpg'
import turtle3 from '../../images/zluw3.jfif'

const MainPost = ({ isMapLoaded }) => {

  return (
    <div className='main__post'>
      <div className='user__wrapper'>
        <img className='user-avatar' 
        src='https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png' 
        alt='user-avatar' />
        <span className='user-name'>Nazwa użytkownika</span>
        <textarea className='user-postnote'></textarea>
      </div>
      <div className='trip__wrapper'>
        {isMapLoaded ? 
          <GoogleMap 
            center={{lat: -3.745, lng: -38.523}} 
            zoom={5}
            mapContainerStyle={{width: '100%', height:'100%', borderRadius: '15px'}}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}>
          </GoogleMap> :
          <div></div>}   
      </div>
      <div className='pictures__wrapper'>
        <ul className='pictures__list'>
          <li>
            <img className='item' src={turtle1}  alt="turtle1"/>
          </li>
          <li>
            <img className='item' src={turtle2} alt="turtle2"/>
          </li>                
          <li>
            <img className='item' src={turtle3} alt="turtle3"/>
          </li>    
        </ul>
        <span>Pokaż więcej...</span>
      </div>
      <div className='like__wrapper'>
        <button className='post__button'>
          <IoMdHeartEmpty className='button__heart-icon' />
        </button>  
      </div>          
    </div>
  )
}

export default MainPost
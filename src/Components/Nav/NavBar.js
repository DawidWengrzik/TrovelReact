import React from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from "react-router-dom";

import './navStyles.css'
import logo from '../../images/logo_marker.png'
const NavBar = () => {
  return (
    <nav className='nav'>
      <div className='nav__wrapper'>
        <div className='navbar__filter'>
          <input className='filter-input' placeholder='Szukaj'/>
        </div>
      </div>   
      <Link to='/' className='nav__wrapper'>
          <img src={logo} className='navbar__logo' alt='trovel-logo'/>
      </Link>  
      
      <div className='nav__wrapper'>
        {/* icon here */}
        {/* Haburger here */}
        <div className='navbar__profile'>
          <button className='profile__icon-wrapper'>
            <AiOutlineUser className='profile-icon' />
          </button>
          <span className='profile-dots'></span>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
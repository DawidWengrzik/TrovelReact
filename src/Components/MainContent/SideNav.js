import React from 'react'
import './MainContent.css'
import { BiHomeAlt } from 'react-icons/bi';
import { GiWallet } from "react-icons/gi";
import { BsPeopleFill } from 'react-icons/bs'
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className='side__nav'>
        <ul className='side__nav--mainlist'>
            <Link to='/'>
                <li className='mainlist__item'>
                    <BiHomeAlt className='mainlist__icon' />
                    <span>Strona główna</span>
                </li>
            </Link>
            <Link to='/friends'>
                <li className='mainlist__item'>
                    <BsPeopleFill className='mainlist__icon' />
                    <span>Lista znajomych</span>
                </li>
            </Link>
            <Link to='/trip-plan'>
                <li className='mainlist__item'>
                    <GiWallet className='mainlist__icon' />
                    <span>Zaplanuj wycieczkę</span>
                </li>     
            </Link>                   
        </ul>

        <hr className='mainlist__underline'></hr>
        
        <div className='sublist__container'>
            <span className='sidenav__sub-header'>Grupy:</span>
            <ul className='sublist'>
                <li className='sublist__item'>
                    <span>Strona główna</span>
                </li>
                <li className='sublist__item'>
                    <span>Lista znajomych</span>
                </li>
                <li className='sublist__item'>
                    <span>Zaplanuj wycieczkę</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SideNav
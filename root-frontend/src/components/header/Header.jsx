import React from 'react'
import './Header.scss'
import logo from '../../images/rootlogo.png'
import Search from '../search/Search'
import { Link } from 'react-router-dom'

function Header({ showSearch }) {
  return (
    <div className='header'>
      <div className='header-container'>
        <Link className='link' to='/'>
        <img className='root-logo' src={logo}/>
        </Link>
        {showSearch && <Search/> }

        <div className='links'>
          <Link className='link' to='/sign-in'>
          <p className='small-text-blue' >Sign in</p>
          </Link>
         
          <button className='button-1'>Contact Us</button>
          
        </div>

       
      </div> 
    </div>
  )
}

export default Header
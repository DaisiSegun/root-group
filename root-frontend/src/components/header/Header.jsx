import React, { useState } from 'react';
import './Header.scss';
import logo from '../../images/rootlogo.png';
import Search from '../search/Search';
import { Link } from 'react-router-dom';

function Header({ showSearch }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  

  return (
    <div className='header'>
      <div className='header-container'>
        <Link className='link' to='/'>
          <img className='root-logo' src={logo} alt='Root Logo' />
        </Link>

        {showSearch && <Search />}

        <div className='links'>
        <Link className='link' to='/sign-in'>
            <p className='small-text-blue'>Sign in</p>
          </Link>
          <div  className='dropdown'>
            <button className='button-1' onClick={toggleDropdown}>
              Contact Us
            </button>
            {showDropdown && (
              <div className='dropdown-content'>
                <Link className='drop-text' to='tel:+2349019971557'>Call us</Link>
                <a className='drop-text' href='https://wa.me/+2349019971557'>Text us</a>
                <Link className='drop-text' to='mailto:rootsgotyou@gmail.com'>Send us an Email</Link>
              </div>
            )}
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default Header;

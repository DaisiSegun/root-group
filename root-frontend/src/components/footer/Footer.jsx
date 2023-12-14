import React from 'react'
import './Footer.scss'
import footerIcon from '../../images/group.svg'
function Footer() {
  return (
    <div className='footer'>
      <img src={footerIcon} className='footer-icon'/>
      <p className='footer-text'>2024 Root Group</p>
      <p className='footer-text'>.</p>
      <p className='footer-text'>Privacy & policies</p>
      <p className='footer-text'>.</p>
      <p className='footer-text'>Contact us</p>
    </div>
  )
}

export default Footer
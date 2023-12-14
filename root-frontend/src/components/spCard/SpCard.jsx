import React from 'react'
import './SpCard.scss'
import spProfile from '../../images/tec-samuel.jpg'
import rating from '../../images/rating.svg'
import { Link } from 'react-router-dom'
function SpCard() {
  return (
    <div className='sp-card'>
      <img src={spProfile} className='sp-profile-img'/>

      <div className='sp-card-text-contianer'>
        <div className='sp-title-contianer'>
        <h1 className='sp-name'>Technician Samuel  </h1>
        <div className='rating-container'> 
            <img src={rating} className='rating-icon'/>
            <p className='rating'>5.0</p>
            <p className='num-job-done'>(0)</p>
        </div>
        </div>
        <p className='service-description'>I repair all mobile phones, both iPhone & Android and I can also come wherever you are in Lagos to repair your phone.</p>

        <div className='starting-price'>
          <p className='starting-price-text'>Starting service price:</p>
          <div className='price-container'>
            <small>₦</small>
            <strong>6,000</strong>
          </div>
        </div>
      </div>
      <Link className='link' to='/view-profile'>
      <button className='view-profile'>View Profile</button>
      </Link>

    </div>
  )
}

export default SpCard
import React from 'react'
import './Reviews.scss'
import star from '../../images/rating.svg'
import avatarTest from '../../images/avatar-test.jpg'
function Reviews() {
  return (
    <div className='reviews'>
      <div className='review-title-container'>

        <img className='avatar-test' src={avatarTest}/>
        <h1 className='review-title'>Oyindamola Sanusi</h1>

      </div>

      <div className='reviw-rating'>
      <h1 className='rating-text'>Rating:</h1>
      <img src={star}/>
      <p className='rating-num'>5.0</p>

      </div>

      <p className='review-des'>Thanks so much on helping fix my phone without having to stress me at all. No single trace of the repair, it literally looks just as new!</p>

    </div>
  )
}

export default Reviews
import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './SpProfile.scss'
import profileImg from '../../images/tec-samuel.jpg'
import ratingIcon from '../../images/rating.svg'
import serviceImage from '../../images/service-img.png'
import right from '../../images/right.svg'
import left from '../../images/left.svg'
import Reviews from '../../components/reviews/Reviews'
import golf from '../../images/golf.svg'
function SpProfile() {
  return (
    <div className='sp-profile'>
      <Header showSearch={true}/>

      <h1 className='header-24px'>I repair mobile phones</h1>

      <div className='profile-name-avatar-rating'>
        <div className='avatar-name'>
          <img src={profileImg} className='profile-img'/>
          <p className='profile-name'> Technician Samuel</p>
        </div>

        <div className='rating-review'>
            <img src={ratingIcon} className='rating-icon'/>
            <p className='rating-num'> 5.0</p>
            <p className='num-of-jobs'>(0)</p>
        </div>
      </div>

      <div className='main-section'>

          <div  className='section-1'>

            <div className='img-container'>
              <div className='left-container'>
                 <img src={left} className='left-icon'/>
              </div>
              <img className='service-img' src={serviceImage}/>

              <div className='right-container'>

              <img src={right} className='right-icon'/>

              </div>
       
            </div>
          <div className='button1'>
            Request a Quote
            <img src={golf}className='golf' />
          </div>
           <h2 className='a-service'>About Service</h2>
           <p className='service-des'> I repair all mobile phones, both iPhone & Android and I can also come wherever you are in Lagos to repair your phone.</p>
           <h2 className='a-service'>Reviews</h2>

           

           
          </div>

          <div className='section-2'>
             
            <div className='sp-info'>
            <div className='sp-des'>
                <p className='light-des'>My location</p>
                <p className='dark-des'>Ikeja</p>
              </div> 
              <div className='sp-des'>
                <p className='light-des'>Interests</p>
                <p className='dark-des'>iPhone, samsung, music</p>
              </div>   
              <div className='sp-des'>
                <p className='light-des'>Languages</p>
                <p className='dark-des'>English, Igbo</p>
              </div> 
              <div className='sp-des'>
                <p className='light-des'>Certifications</p>
                <p className='dark-des'>Waec, Institute of repairs</p>
              </div> 
              <div className='sp-des'>
                <p className='light-des'>Years of experience</p>
                <p className='dark-des'>5 years</p>
              </div>  
              <div className='sp-des'>
                <p className='light-des'>Member since</p>
                <p className='dark-des'>November, 2023</p>
              </div>
            </div>

            <div className='sp-profile'>
                <img className='sp-profile-img' src={profileImg}/>
                <p className='profile-name'>Samuel William</p>
                <button className='button2'>Contact me</button>
            </div>


          </div>
          
      </div>
{/* 
    <div className='create-review'>
      <input  placeholder='Write a review'/>

      <button>Submit</button>

      </div> */}
      <Reviews/>
           <Reviews/>

    <div className='space1'></div>
      {/* <Footer/> */}

    </div>
  )
}

export default SpProfile
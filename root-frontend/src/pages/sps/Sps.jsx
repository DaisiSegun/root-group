import React from 'react'
import Header from '../../components/header/Header'
import './Sps.scss'
import SpCard from '../../components/spCard/SpCard'
import Footer from '../../components/footer/Footer'

function Sps() {
  return (
    <div className='sps'>
      <Header showSearch={true} />
       {/* <hr className='line'/> */}

       <h1 className='header-24px'>Washing machine repairs </h1>
       <p className='subtitle-text'>Background checks for every Root Service Provider (Root Sp) have been completed</p>
       <SpCard/>
       <SpCard/>
       
       <Footer/>
    </div>
  )
}

export default Sps
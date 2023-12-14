import React from 'react'
import './CreateService.scss'
import Header from '../../components/header/Header'
import upload from '../../images/upload.svg'
import golf from '../../images/golf.svg'
function CreateService() {
  return (

    <div className='create-service'>
      <Header showSearch={false}/>
      <div className="header-create">
        Creat new service
      </div>

      <div className="section-container">
        <div className="section-1">

          <div className="create-contianer">
              <p className='create-title'>Profile Title Page</p>
              <input placeholder='3-4 words of what your service is' className='create-input'/>

          </div>

          <div className="create-contianer">
              <p  className='create-title'>Category</p>
              <input placeholder='select category' className='create-input'/>

          </div>

          
          <div className="create-contianer">
              <p className='create-title'>Service Title</p>
              <input placeholder='Name of your service' className='create-input'/>

          </div>


          
          <div className="create-contianer">
              <p className='create-title'>Service Description</p>
              <input placeholder='Pitch your service to your customers here' className='create-input2'/>

          </div>


          
          <div className="create-contianer">
              <p className='create-title'>Starting Price </p>
              <input placeholder='What is your minimum price' className='create-input'/>

          </div>
          <div className="create-contianer">
              <p className='create-title'>Certifications </p>
              <input placeholder='please include a certification related to your field' className='create-input'/>

          </div>

        </div>

        <div className="section-2">

        <div className="create-contianer2">
              <p className='create-title2'>Upload Cover </p>

              <div className="create-img-container">
                <img className='create-img' src={upload}/>

              </div>
             <img/>

          </div>

          <div className="create-contianer2">
              <p className='create-title2'>Upload Images (please upload multiple images) </p>

              <div className="create-img-container">
                <img className='create-img' src={upload}/>
                
              </div>
             <img/>

          </div>

          <div className='button2'>
          Create Service
          <img src={golf}className='golf' />
          </div>

        </div>
      </div>
      <div className='space'></div>
    </div>
  )
}

export default CreateService
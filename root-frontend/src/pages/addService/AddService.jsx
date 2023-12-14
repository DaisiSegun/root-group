import React from 'react'
import './AddService.scss'
import Header from '../../components/header/Header'
import golf from '../../images/golf.svg'
import serviceImg from '../../images/avatar-test.jpg'
import deleteService from '../../images/delete.svg'
function AddService() {
  return (
    <div className='add-service'>
        <Header showSearch={false}/>
    <div className="container">

          <div className='first-section'>


          <h1 className='add-service-header'>My Services</h1>

          <div className='button1'>
          Add Service
          <img src={golf}className='golf' />
          </div>
          </div>

          <table>
        <tr>
        <th>Image</th>
        <th>Title</th>
        <th>Price</th>
        <th>Sales</th>
        <th>Action</th>
        </tr>

        <tr>

       
        <td>
          <img className='img' src= {serviceImg}/>
        </td>
        <td>All mobile phone repairs</td>
        <td>9,000</td>
        <td>25</td>
        <td>
          <img className='delete' src={deleteService}/>
        </td>

        </tr>

        <tr>

              
        <td>
          <img className='img' src= {serviceImg}/>
        </td>
        <td>Gig 1</td>
        <td>12</td>
        <td>25</td>
        <td>
          <img className='delete' src={deleteService}/>
        </td>

        </tr>



        <tr>

              
        <td>
          <img className='img' src= {serviceImg}/>
        </td>
        <td>Gig 1</td>
        <td>12</td>
        <td>25</td>
        <td>
          <img className='delete' src={deleteService}/>
        </td>

        </tr>

      </table>


    </div>
        

     


    </div>
  )
}

export default AddService
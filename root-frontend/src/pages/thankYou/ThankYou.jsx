import React from 'react'
import getCurrentUser from '../../../utils/getCurrentUser'
import welcome from '../../images/welcome.gif'
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Header from '../../components/header/Header';
import './ThankYou.scss'
function ThankYou() {

  const currentUser = getCurrentUser();

  return (

    <div className='thank-you'>
   
    <div className='sorry-container'>



    <h1 className='sorry-header'>Thank you for choosing Root {currentUser.user.username} < FavoriteIcon className='love' />  </h1>
    <img className='sryImg' src={welcome} />

    <Link className='link' to="/">
    <button  className='sorry-button'>Go Home</button>
    </Link>
  
</div>
</div>
  )
}

export default ThankYou
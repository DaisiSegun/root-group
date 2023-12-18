import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.scss';
import Header from '../../components/header/Header';
import homeImg from '../../images/home-img.png';
import Search from '../../components/search/Search';
import CatCard from '../../components/CatCard/CatCard';
import loadMore from '../../images/load-more.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Testimonial from '../../components/testimonial/Testimonial';
import Footer from '../../components/footer/Footer';
import axios from 'axios';
import newRequest from '../../../utils/newRequest';

function Home() {
  const [catData, setCatData] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Fetch category data from the backend when the component mounts
    newRequest.get('/cat/all')
      .then(response => {
        setCatData(response.data.cats);
      })
      .catch(error => {
        console.error('Error fetching category data:', error);
      });
  }, []);
  

  const navigateToFindSP = () => {
    // Navigate to the '/findsp' page using useNavigate
    navigate('/findsp');
  };

  return (
    <div className='home'>
      <Header showSearch={false} />
      <img className='home-img' src={homeImg} alt="Home" />
      <h1 className='header-32px'>Hire a Root Service Provider</h1>
      <Search />
      <h1 className='header-24px'>Root Services</h1>

      <div className='root-services-section'>
        <div className='cat-container'>
          {/* Display CatCard components with data from the backend */}
          {catData.map((cat) => (
             <CatCard key={cat.category} categoryId={cat._id} />
          ))}
        </div>

        {/* Show more button to navigate to '/findsp' page */}
        <button className='load-more-button' onClick={navigateToFindSP}>
          View More
          <KeyboardArrowDownIcon className='load-more-icon' />
        </button>
      </div>

      <h1 className='header-28px'>See what our Customers are saying about Root</h1>
      <div className='testimonial-container'>
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
      <Footer />
    </div>
  );
}

export default Home;

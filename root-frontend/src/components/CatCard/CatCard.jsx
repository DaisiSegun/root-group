import React, { useState, useEffect } from 'react';
import './CatCard.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import newRequest from '../../../utils/newRequest';

function CatCard({ categoryId }) {
  const [catData, setCatData] = useState(null);

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        // Define the API endpoint for fetching cat data by ID
        const apiUrl = `/cat/${categoryId}`; // Update the URL based on your API

        // Make a GET request to the backend to fetch cat data
        const response = await newRequest.get(apiUrl);

        // Update the state with the fetched cat data
        setCatData(response.data);
      } catch (error) {
        // Handle errors, e.g., log the error or show an error message
        console.error('Error fetching cat data:', error);
      }
    };
console.log(categoryId)
    // Call the function to fetch data
    fetchCatData();
  }, [categoryId]);

  if (!catData) {
    // Render a loading state or placeholder while waiting for data
    return <p>Loading...</p>;
  }

  return (
  
<Link to={`/findsp/${catData.cat.category}`}>
      <div className='cat-card'>
        <img src={catData.cat.image} className='cat-img' alt={catData.title} />
        <h1 className='title-text'>{catData.cat.title}</h1>
        <p className='smallest-text-gray'>{catData.cat.desc}</p>
      </div>
    </Link>
  );
}

export default CatCard;

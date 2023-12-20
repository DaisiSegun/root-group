import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import newRequest from '../../../utils/newRequest';
import CatCard from '../../components/CatCard/CatCard';

function MoreService() {
  const [catData, setCatData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  useEffect(() => {
    // Fetch category data from the backend when the component mounts
    newRequest
      .get(`/cat/all?page=${currentPage}&limit=${cardsPerPage}`)
      .then((response) => {
        setCatData(response.data.cats);
      })
      .catch((error) => {
        console.error('Error fetching category data:', error);
      });
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className='more'>
      <Header showSearch={true} />

      <h1 className='header-24px'>Root Services</h1>

      <div className='root-services-section'>
        <div className='cat-container'>
          {/* Display CatCard components with data from the backend */}
          {catData.map((cat) => (
            <CatCard key={cat.category} categoryId={cat._id} />
          ))}
        </div>

        {/* Show Next and Previous buttons */}
        <div className='pagination-buttons'>
          <button className='pagination-button' onClick={handlePrevPage}>
            Previous
          </button>
          <button className='pagination-button' onClick={handleNextPage}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default MoreService;

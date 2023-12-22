import React, {useEffect, useState }from 'react';
import './SearchResult.scss';
import SpCard from '../../components/spCard/SpCard';
import Footer from '../../components/footer/Footer';
import newRequest from '../../../utils/newRequest';
import Header from '../../components/header/Header';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import Sorry from '../../components/sorry/Sorry';


function SearchResult() {
  const location = useLocation();
  const search = new URLSearchParams(location.search).get('search');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await newRequest.get(`/services/all?search=${search}`);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [search]);

  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <div className='sps'>
      <Header showSearch={true} />
      <h1 className='header-24px'>Search Result</h1>
      <p className='subtitle-text'>Find your service</p>

      {data.length === 0 &&  <Sorry />} 
   

      {data.map((service) => (
        <SpCard key={service._id} item={service} />
      ))}

      <Footer />
    </div>
  );
}

export default SearchResult;

import { useEffect, useState } from 'react';
import yelp from '../Api/yelp'; 

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          sort_by: 'best_match',
          location: 'İstanbul',
          term: searchTerm
        },
      });
      console.log(response.data.businesses); 
      setResults(response.data.businesses);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Bağlantı Hatası');
    }
  };

  useEffect(() => {
    searchApi('restaurant');
  }, []);

  return [searchApi, results, errorMessage];
};

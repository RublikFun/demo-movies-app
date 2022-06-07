import React, { useState, useEffect } from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const APY_KEY = process.env.REACT_APP_APY_KEY;

function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchRequest = (requestKey, type = 'all') => {
    setLoading(true);

    fetch(`https://www.omdbapi.com/?apikey=${APY_KEY}&s=${requestKey}${type !== 'all' ? `&type=${type}` : ''}`)
      .then((response) => response.json())
      .then((data) => { 
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    searchRequest('mask');
  }, []);

  return (
    <div className='container app-content'>
      <Search searchRequest={searchRequest} />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </div>
  );
}

export { Main };


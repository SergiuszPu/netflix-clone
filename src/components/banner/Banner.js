import React, { useState, useEffect }from 'react';
import './banner.scss';
import axios from '../../api/axios';
import requests from '../../api/requests';


function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log('request', request);
      setMovie(request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]);  
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n-1) + '...' : str;
  }
  return (
    <div className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">Wiecej Informacji</button>
        </div>
      </div>
      <div className="banner--fadeBottom"/>
    </div>
  );
}

export default Banner;

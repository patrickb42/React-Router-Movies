import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import MovieDetails from './MovieDetails';

const MovieList = () => {
  const [movies, setMovies] = useState<MovieInterface[]>([]);
  const getMovies = () => {
    (async () => {
      try {
        const axiosResponse = await axios.get('http://localhost:5000/api/movies');
        setMovies(axiosResponse.data);
      } catch (e) {
        console.error('Server Error', e);
      }
    })();
  };
  useEffect(getMovies, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`movies/${movie.id}`}>
          <MovieDetails key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;

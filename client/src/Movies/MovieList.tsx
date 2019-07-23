import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import MovieDetails from './MovieDetails';

const MovieList = () => {
  const [movies, setMovies] = useState<MovieInterface[]>([]);
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then((response) => {
          setMovies(response.data);
        })
        .catch((error) => {
          console.error('Server Error', error);
        });
    };
    getMovies();
  },        []);

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

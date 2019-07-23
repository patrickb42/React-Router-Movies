import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieDetails from './MovieDetails';
import { RouteChildrenProps } from 'react-router';

const MovieList = (props: RouteChildrenProps) => {
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

  const goToMovieFactory = (movie: MovieInterface) => {
    return (() => {
      props.history.push(`movies/${movie.id}`);
    });
  };

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div onClick={goToMovieFactory(movie)}>
          <MovieDetails key={movie.id} movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;

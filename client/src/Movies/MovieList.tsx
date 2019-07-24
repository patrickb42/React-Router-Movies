import React, { useState, useEffect } from 'react';
import { RouteChildrenProps } from 'react-router';
import axios from 'axios';

import MovieCard from './MovieCard';
// import HistLink from '../HistLink';

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

  const toFactory = (dest: string) => {
    return (() => {
      props.history.push(dest);
    });
  };

  return (
    <div className="movie-list">
      {movies.map(movie => (
        // HOC to ty later
        // <HistLink history={props.history} dest={`movies/${movie.id}`}>
        //   <MovieCard key={movie.id} movie={movie} />
        // </HistLink>
        <div onClick={toFactory(`/movies/${movie.id}`)}>
          <MovieCard key={movie.id} movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;

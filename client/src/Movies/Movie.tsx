import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RouteProps, RouterProps, RouteComponentProps } from 'react-router';

import MovieCard from './MovieCard';

interface MovieParam {
  id: number;
}
const Movie = (props: RouteComponentProps) => {
  const [movie, setMovie] = useState<MovieInterface | undefined>(undefined);

  const fetchMovie = () => {
    (async () => {
      const params = props.match.params as MovieParam;
      const id = params.id;
      // change ^^^ that line and grab the id from the URL
      // You will NEED to add a dependency array to this effect hook

      try {
        const axiosResponse = await axios.get(`http://localhost:5000/api/movies/${id}`);
        setMovie(axiosResponse.data);
      } catch (e) {
        console.error(e);
      }
    })();
  };
  useEffect(fetchMovie, []);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) return <div>Loading movie information...</div>;

  const { id, title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <MovieCard key={movie.id} movie={movie} />
      <div className="save-button">Save</div>
    </div>
  );
};

export default Movie;

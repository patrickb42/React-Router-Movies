import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState<MovieInterface[]>([]);

  const addToSavedList = (movie: MovieInterface) => {
    setSavedList([...savedList, movie]);
  };

  return (
    <Router>
      <div>
        <SavedList list={savedList} />
        <Route exact path="/" component={MovieList}/>
        <Route path="/movies/:id" component={Movie} />
      </div>
    </Router>
  );
};

export default App;

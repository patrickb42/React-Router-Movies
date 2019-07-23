import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import Movie, { MovieType } from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = (movie: MovieType) => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <Router>
      <div>
        <SavedList list={savedList} />
        <div>Replace this Div with your Routes</div>
      </div>
    </Router>
  );
};

export default App;

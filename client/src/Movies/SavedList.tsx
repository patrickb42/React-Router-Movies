import React from 'react';

interface SavedListProps {
  list: MovieInterface[];
}
const SavedList = ({ list }: SavedListProps) => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div className="home-button">Home</div>
  </div>
);

export default SavedList;

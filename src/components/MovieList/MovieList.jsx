import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../actions/movieActions';

const MoviesList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.list); // Select movies from state

  useEffect(() => {
    dispatch(fetchMovies()); // Trigger saga to fetch movies
  }, [dispatch]);

  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <img src={movie.poster} alt={movie.title} />
          {/* Additional movie details */}
        </div>
      ))}
    </div>
  );
};

export default MoviesList;

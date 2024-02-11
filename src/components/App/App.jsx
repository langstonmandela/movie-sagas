import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails'; // Adjust the path as necessary
import AddMovie from '../AddMovie'; // Adjust the path as necessary
import './App.css';
import Header from '../Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/" exact component={MovieList} />
        <Route path="/details/:id" exact component={MovieDetails} /> {/* Route for movie details */}
        <Route path="/add" exact component={AddMovie} /> {/* Route for adding a new movie */}
      </Router>
    </div>
  );
}

export default App;

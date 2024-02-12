import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovie from '../AddMovie/AddMovie'; 
import './App.css';
import Header from '../Header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> 
        <Route path="/" exact component={MovieList} />
        <Route path="/details/:id" exact component={MovieDetails} />
        <Route path="/add" exact component={AddMovie} />
      </div>
    </Router>
  );
}

export default App;

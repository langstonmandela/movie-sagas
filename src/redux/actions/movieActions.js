// Action types
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const SET_MOVIES = 'SET_MOVIES';
export const FETCH_MOVIE_DETAILS = 'FETCH_MOVIE_DETAILS'; 
export const SET_MOVIE_DETAILS = 'SET_MOVIE_DETAILS'; 
export const ADD_MOVIE = 'ADD_MOVIE'; 
export const ADD_MOVIE_SUCCESS = 'ADD_MOVIE_SUCCESS'; 
export const ADD_MOVIE_FAILURE = 'ADD_MOVIE_FAILURE'; 
export const SET_LOADING_STATE = 'SET_LOADING_STATE';

// Action creator for fetching the list of movies
export const fetchMovies = () => ({
    type: FETCH_MOVIES,
});

// Action creator for fetching details of a specific movie
export const fetchMovieDetails = (movieId) => ({
    type: FETCH_MOVIE_DETAILS,
    payload: Number(movieId),
});

// Action creator for setting the details of a specific movie in the store
export const setMovieDetails = (details) => ({
    type: SET_MOVIE_DETAILS,
    payload: details,
});


// Action creator for initiating the process of adding a new movie
export const addMovie = (movieData) => ({
    type: ADD_MOVIE,
    payload: movieData, // The data for the new movie to add
});

// Action creator for handling the successful addition of a movie
export const addMovieSuccess = (movieData) => ({
    type: ADD_MOVIE_SUCCESS,
    payload: movieData, // The data for the newly added movie, typically returned by the backend
});

// Action creator for handling any errors during the addition of a movie
export const addMovieFailure = (error) => ({
    type: ADD_MOVIE_FAILURE,
    payload: error, // Error message or object
});

// Action creator for setting loading state
export const setLoadingState = (isLoading) => ({
    type: SET_LOADING_STATE,
    payload: isLoading,
});

import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
    FETCH_MOVIES,
    ADD_MOVIE,
    FETCH_MOVIE_DETAILS,
    SET_MOVIES,
    SET_LOADING_STATE,
    SET_MOVIE_DETAILS, 
    ADD_MOVIE_FAILURE,
} from '../actions/movieActions';

// Fetch all movies
function* fetchMoviesSaga() {
    try {
        const response = yield call(axios.get, '/api/movies');
        // Dispatching SET_MOVIES action with the fetched movies data
        yield put({ type: SET_MOVIES, payload: response.data });
    } catch (error) {
        console.error('Fetch movies request failed:', error);
    }
}

// Fetch movie details
function* fetchMovieDetailsSaga(action) {
    try {
        yield put({ type: SET_LOADING_STATE, payload: true });
        const response = yield call(axios.get, `/api/movies/${action.payload}`);
        console.log(response.data);
        // Dispatching SET_MOVIE_DETAILS action with the fetched movie details data
        yield put({ type: SET_MOVIE_DETAILS, payload: response.data });
        yield put({ type: SET_LOADING_STATE, payload: false });
    } catch (error) {
        console.error('Fetch movie details request failed:', error);
        yield put({ type: ADD_MOVIE_FAILURE, payload: error.toString() });
        yield put({ type: SET_LOADING_STATE, payload: false });
    }
}

// Add a new movie
function* addMovieSaga(action) {
    try {
        yield call(axios.post, '/api/movies', action.payload);
        // Refetching movies list to include the new movie
        yield put({ type: FETCH_MOVIES });
    } catch (error) {
        console.error('Add movie request failed:', error);
        yield put({ type: ADD_MOVIE_FAILURE, payload: error.message });
    }
}

// Combine watcher sagas
export default function* watchMoviesSaga() {
    yield takeLatest(FETCH_MOVIES, fetchMoviesSaga);
    yield takeLatest(ADD_MOVIE, addMovieSaga);
    yield takeLatest(FETCH_MOVIE_DETAILS, fetchMovieDetailsSaga);
}

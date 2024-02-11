import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

// Worker saga will be fired on FETCH_MOVIES actions
function* fetchMoviesSaga() {
    try {
        const response = yield call(axios.get, '/api/movies');
        yield put({ type: 'SET_MOVIES', payload: response.data });
    } catch (error) {
        console.log('Fetch movies request failed', error);
    }
}

// Worker saga for adding a new movie
function* addMovieSaga(action) {
    try {
        const response = yield call(axios.post, '/api/movies', action.payload); 
        yield put({ type: 'FETCH_MOVIES' });
    } catch (error) {
        console.log('Add movie request failed', error);
    }
}

// Worker saga for fetching movie details
function* fetchMovieDetailsSaga(action) {
    try {
        yield put({ type: 'SET_LOADING_STATE', payload: true }); // Indicate loading started
        const response = yield call(axios.get, `/api/movies/${action.payload}`);
        yield put({ type: 'SET_MOVIE_DETAILS', payload: response.data });
        yield put({ type: 'SET_LOADING_STATE', payload: false }); // Indicate loading finished
    } catch (error) {
        console.log('Fetch movie details request failed', error);
        yield put({ type: 'SET_LOADING_STATE', payload: false }); // Reset loading state on failure
    }
}

// Watcher sagas
function* watchMoviesSaga() {
    yield takeLatest('FETCH_MOVIES', fetchMoviesSaga);
    yield takeLatest('ADD_MOVIE', addMovieSaga);
    yield takeLatest('FETCH_MOVIE_DETAILS', fetchMovieDetailsSaga); // Watch for FETCH_MOVIE_DETAILS action
}

export default watchMoviesSaga;

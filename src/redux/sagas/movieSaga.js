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

// Starts fetchMoviesSaga on each dispatched FETCH_MOVIES action
function* watchMoviesSaga() {
    yield takeLatest('FETCH_MOVIES', fetchMoviesSaga);
}

export default watchMoviesSaga;

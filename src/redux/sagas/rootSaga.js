import { all } from 'redux-saga/effects';
import watchMoviesSaga from './moviesSaga';
import { watchMovieDetailsSaga } from './movieSaga'; 

export default function* rootSaga() {
    yield all([
        watchMoviesSaga(),
        watchMovieDetailsSaga(), 
    ]);
}

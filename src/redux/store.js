import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import moviesReducer from '../redux/reducers/movie.reducer'; 

// Worker saga: will be fired on "FETCH_MOVIES" actions
function* fetchAllMovies() {
  try {
    const moviesResponse = yield axios.get('/api/movies');
    // Dispatch a success action to the store with the new movies
    yield put({ type: 'SET_MOVIES', payload: moviesResponse.data });
  } catch (error) {
    console.error('fetchAllMovies error:', error);
  }
}

function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchAllMovies);
}

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  movies: moviesReducer, 
});

// Use compose to combine middleware and DevTools extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware, logger)
    
  )
);

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;

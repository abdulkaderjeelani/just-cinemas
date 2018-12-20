import { createReducer } from 'redux-act';
import { fetchMoviesProgress, fetchMoviesSuccess, fetchMoviesFailure } from 'actions/movies';

export default createReducer({
  [fetchMoviesProgress]: state => Object.assign({}, state, { fetching: true }),
  [fetchMoviesSuccess]: (state, payload) => Object.assign({}, state, { fetching: false, items: payload }),
  [fetchMoviesFailure]: state => Object.assign({}, state, { fetching: false }),
}, {});

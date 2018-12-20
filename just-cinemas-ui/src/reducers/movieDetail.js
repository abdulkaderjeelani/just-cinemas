import { createReducer } from 'redux-act';
import { fetchMovieDetailProgress, onSuccess, fetchMovieDetailFailure } from 'actions/movieDetail';

export default createReducer({
  [fetchMovieDetailProgress]: state => Object.assign({}, state, { fetching: true }),
  [onSuccess]: (state, payload) => Object.assign({}, state, { fetching: false, item: payload }),
  [fetchMovieDetailFailure]: state => Object.assign({}, state, { fetching: false }),
}, {});

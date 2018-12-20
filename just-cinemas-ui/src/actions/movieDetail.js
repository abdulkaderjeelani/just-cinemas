import { createAction } from 'redux-act';
import axios from 'axios';

const FETCH_MOVIES = 'FETCH_MOVIEINFO';
const FETCH_MOVIES_PROGRESS = 'FETCH_MOVIEINFO_PROGRESS';
const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIEINFO_SUCCESS';
const FETCH_MOVIES_FAILURE = 'FETCH_MOVIEINFO_FAILURE';

export const fetchMovieDetailProgress = createAction(FETCH_MOVIES_PROGRESS);
export const onSuccess = createAction(FETCH_MOVIES_SUCCESS);
export const fetchMovieDetailFailure = createAction(FETCH_MOVIES_FAILURE);

export default (movieName => createAction(FETCH_MOVIES, (dispatch) => {
  dispatch(fetchMovieDetailProgress());
  axios.get(`/api/movies/get-details/${movieName}`)
    .then(({ data: movie }) => {
      dispatch(onSuccess(movie));
    })
    .catch(error => dispatch(fetchMovieDetailFailure(error)));
}));

import { createAction } from 'redux-act';
import axios from 'axios';
import _ from 'lodash';
import changeCase from 'change-case';
import slug from 'slug';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_COMING_SOON = 'FETCH_COMING_SOON_MOVIES';
const FETCH_MOVIES_PROGRESS = 'FETCH_MOVIES_PROGRESS';
const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const fetchMoviesProgress = createAction(FETCH_MOVIES_PROGRESS);
export const fetchMoviesSuccess = createAction(FETCH_MOVIES_SUCCESS);
export const fetchMoviesFailure = createAction(FETCH_MOVIES_FAILURE);

export default (url => createAction((dispatch) => {
  dispatch(fetchMoviesProgress());
  axios.get(url)
    .then(({ data: movies }) => {
      const result = _.map(movies, (movie) => {
        const { name, language, id } = movie;
        const { experiences } = movie;
        console.log(movie);
        console.log(experiences);
        const movieSlug = slug(changeCase.sentenceCase(name), { lower: true });
        const lang = changeCase.sentenceCase(language);
        return Object.assign({}, movie, { slug: movieSlug, language: lang, movieId: id });
      });
      dispatch(fetchMoviesSuccess(result));
    })
    .catch(error => dispatch(fetchMoviesFailure(error)));
}));

// export const fetchMovies = (dispatch) => {
//     dispatch(fetchMoviesProgress());
//
//     axios.get('/api/movies/now-showing')
//         .then(({ data: movies }) => {
//             const result = _.map(movies, (movie) => {
//                 const { name } = movie;
//                 const movieSlug = slug(changeCase.sentenceCase(name), { lower: true });
//                 return Object.assign({}, movie, { slug: movieSlug });
//             });
//             dispatch(fetchMoviesSuccess(result));
//         })
//         .catch(error => dispatch(fetchMoviesFailure(error)));
// };

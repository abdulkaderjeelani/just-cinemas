import { createAction } from 'redux-act';

const FETCH_LANGUAGES = 'FETCH_LANGUAGES';
const FETCH_LANGUAGES_PROGRESS = 'FETCH_LANGUAGES_PROGRESS';
const FETCH_LANGUAGES_SUCCESS = 'FETCH_LANGUAGES_SUCCESS';
const FETCH_LANGUAGES_FAILURE = 'FETCH_LANGUAGES_FAILURE';
const SELECT_LANGUAGES = 'SELECT_LANGUAGES';

export const fetchLanguagesProgress = createAction(FETCH_LANGUAGES_PROGRESS);
export const fetchLanguagesSuccess = createAction(FETCH_LANGUAGES_SUCCESS);
export const fetchLanguagesFailure = createAction(FETCH_LANGUAGES_FAILURE);
export const selectLanguages = createAction(SELECT_LANGUAGES, langs => ({ langs }));

export default () =>
  createAction(FETCH_LANGUAGES, (dispatch) => {
    const result = [
      {
        id: '1',
        name: 'English',
      },
      {
        id: '2',
        name: 'Hindi',
      },
      {
        id: '3',
        name: 'Telegu',
      },
      {
        id: '4',
        name: 'Tamil',
      },
    ];

    dispatch(fetchLanguagesSuccess(result));
  });

/*
dispatch(fetchLanguagesProgress());
  axios.get('/api/languages/')
    .then(({ data: movies }) => {
      const result = _.map(movies, (movie) => {
        const { name } = movie;
        const movieSlug = slug(changeCase.sentenceCase(name), { lower: true });
        return Object.assign({}, movie, { slug: movieSlug });
      });
      dispatch(fetchLanguagesSuccess(result));
    })
    .catch(error => dispatch(fetchLanguagesFailure(error)));


});
*/

// export const fetchLanguages = (dispatch) => {
//     dispatch(fetchLanguagesProgress());
//
//     axios.get('/api/movies/now-showing')
//         .then(({ data: movies }) => {
//             const result = _.map(movies, (movie) => {
//                 const { name } = movie;
//                 const movieSlug = slug(changeCase.sentenceCase(name), { lower: true });
//                 return Object.assign({}, movie, { slug: movieSlug });
//             });
//             dispatch(fetchLanguagesSuccess(result));
//         })
//         .catch(error => dispatch(fetchLanguagesFailure(error)));
// };

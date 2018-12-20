import { createReducer } from 'redux-act';
import { fetchLanguagesProgress, fetchLanguagesSuccess, fetchLanguagesFailure, selectLanguages } from 'actions/menu';

export default createReducer(
  {
    [fetchLanguagesProgress]: state => ({
      ...state,
      fetching: true,
    }),
    [fetchLanguagesSuccess]: (state, payload) => Object.assign({}, state, { fetching: false, items: payload }),
    [fetchLanguagesFailure]: state => Object.assign({}, state, { fetching: false }),
    [selectLanguages]: (state, payload) =>
      Object.assign({}, state, { fetching: false, selectedLanguages: payload.langs }),
  },
  { fetching: false, items: [], selectedLanguages: [] }
);

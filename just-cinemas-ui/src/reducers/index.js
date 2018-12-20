import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from 'reducers/movies';
import movieDetail from 'reducers/movieDetail';
import languages from 'reducers/menu';
import location from 'reducers/location';

const reducers = { movies, languages, movieDetail, location };

module.exports = combineReducers(
  Object.assign({}, reducers, {
    routing: routerReducer,
  })
);

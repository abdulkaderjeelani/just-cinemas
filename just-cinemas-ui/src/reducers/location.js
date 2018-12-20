import { createReducer } from 'redux-act';
import locationSelection from 'actions/SelectLocation';

export default createReducer(
  {
    [locationSelection]: (state, payload) => Object.assign({}, state, { current: payload }),
  },
  {}
);

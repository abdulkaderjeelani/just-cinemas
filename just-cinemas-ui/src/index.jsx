import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import ShowTimeApp from 'containers/ShowTimeApp';
import MovieDetails from 'containers/MovieDetails';


import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'stores/index';

require('bootstrap-loader');

const initialStoreState = { };
const store = configureStore(initialStoreState, browserHistory);

ReactDOM.render(
  <div className="container" >
    <div className="row" >
      <Provider store={store} >
        <Router history={browserHistory} >
          <Route component={App} path="/" />
          <Route component={ShowTimeApp} path="/showtime" />
          <Route component={MovieDetails} path="/Movies/:id" />
        </Router>
      </Provider>
    </div>
  </div>,
  document.getElementById('app')
);

import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from 'reducers/index';
import config from 'config';

const devToolsExtension = () => (window.devToolsExtension ? window.devToolsExtension() : f => f);
const logger = () => createLogger();

const getMiddleware = (history) => {
  const reduxRouterMiddleware = routerMiddleware(history);
  if (config.enableDevTools) {
    return applyMiddleware(thunkMiddleware, logger(), reduxRouterMiddleware)(createStore);
  }
  return applyMiddleware(thunkMiddleware, reduxRouterMiddleware)(createStore);
};

const createStoreWithMiddleware = (initialState, history) => {
  const middleware = getMiddleware(history);
  if (config.enableDevTools) {
    return middleware(reducers, initialState, devToolsExtension());
  }
  return middleware(reducers, initialState);
};

export default function configureStore(initialState, history) {
  const store = createStoreWithMiddleware(initialState, history);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      /* eslint global-require: 0 */
      const nextReducer = require('../reducers');

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

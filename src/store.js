import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// import { composeWithDevTools } from 'redux-devtools-extension';

import axios from 'axios';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      name: 'MyApp', actionsBlacklist: ['REDUX_STORAGE_SAVE']
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk.withExtraArgument(axios))
  // other store enhancers if any
);

export default createStore(
  rootReducer,
  enhancer
);
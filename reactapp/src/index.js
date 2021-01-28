import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import itemReducer from './reducers'
import { compose, applyMiddleware, combineReducers, createStore } from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

const rootReducer = combineReducers({
  item: itemReducer,
 // itemDetail: itemDetailReducer
});

const allEnhancers = compose(
  applyMiddleware(thunk),
  applyMiddleware(logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store = createStore(
  rootReducer, 
 {
      //reducer initial state verme
      item: {},
      //itemDetail : {}
  },
  allEnhancers
 );

ReactDOM.render(
  <Provider store={store}>
    <App />

  </Provider>
  ,
  document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

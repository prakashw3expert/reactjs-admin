import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';


import {createStore, applyMiddleware} from 'redux'
// import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';
import reducer from './reducers'

import thunk from 'redux-thunk'

import routes from './routes';

import {initDone, profile} from './actions'

let logger = createLogger({
  // Ignore `CHANGE_FORM` actions in the logger, since they fire after every keystroke
})

// let sagaMiddleware = createSagaMiddleware()

let store = createStore(reducer, applyMiddleware(logger, thunk))


let localStorage

// If we're testing, use a local storage polyfill
if (global.process && process.env.NODE_ENV === 'test') {
  localStorage = require('localStorage')
} else {
  // If not, use the browser one
  localStorage = global.window.localStorage
}


// We run the root saga automatically
// sagaMiddleware.run(rootSaga)

store.dispatch(initDone())

store.dispatch(profile(localStorage.ptspotter_userId, localStorage.ptspotter_accessToken))

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={hashHistory} />
  </Provider>, document.getElementById('root')
);

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

import {initDone} from './actions'

let logger = createLogger({
  // Ignore `CHANGE_FORM` actions in the logger, since they fire after every keystroke
})

// let sagaMiddleware = createSagaMiddleware()

let store = createStore(reducer, applyMiddleware(logger, thunk))


// We run the root saga automatically
// sagaMiddleware.run(rootSaga)

store.dispatch(initDone())

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={hashHistory} />
  </Provider>, document.getElementById('root')
);

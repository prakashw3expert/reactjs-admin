import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga';

import createLogger from 'redux-logger';
import reducer from './reducers'
import rootSaga from './sagas'


import Full from './containers/Full/'
import Simple from './containers/Simple/'


import Dashboard from './views/Dashboard/'

import Clients from './views/Clients/List/'
import AddClient from './views/Clients/Add/'
import ViewClient from './views/Clients/Detail/'

import Trainers from './views/Trainers/List/'
import AddTrainer from './views/Trainers/Add/'
import ViewTrainer from './views/Trainers/Detail/'

import Categories from './views/Categories/'
import Workouts from './views/Workouts/'

import Article from './views/Article/List/'
import AddArticle from './views/Article/Add/'


import Login from './views/Pages/Login/'
// import Register from './views/Pages/Register/'
// import Page404 from './views/Pages/Page404/'
// import Page500 from './views/Pages/Page500/'

import About from './views/Pages/About'
import TermConditions from './views/Pages/TermConditions'
import Privacy from './views/Pages/Privacy'

let logger = createLogger({
  // Ignore `CHANGE_FORM` actions in the logger, since they fire after every keystroke
})

let sagaMiddleware = createSagaMiddleware()

createStore(reducer, applyMiddleware(logger, sagaMiddleware))
// We run the root saga automatically
sagaMiddleware.run(rootSaga)

let localStorage

// If we're testing, use a local storage polyfill
if (global.process && process.env.NODE_ENV === 'test') {
  localStorage = require('localStorage')
} else {
  // If not, use the browser one
  localStorage = global.window.localStorage
}


/**
* Checks authentication status on route change
* @param  {object}   nextState The state we want to change into when we change routes
* @param  {function} replace Function provided by React Router to replace the location
*/
function checkAuth (nextState, replace) {
  //let {loggedIn} = store.getState()
  let loggedIn = localStorage.ptspotter_accessToken


  // Check if the path isn't dashboard. That way we can apply specific logic to
  // display/render the path we want to
  if (nextState.location.pathname !== '/dashboard' && nextState.location.pathname !== '/auth/login') {
    if (loggedIn) {
      if (nextState.location.state && nextState.location.pathname) {
        replace(nextState.location.pathname)
      } else {
        //replace('/auth/login')
      }
    }
    else{
      replace('/auth/login')
    }
  } else {

    // If the user is already logged in, forward them to the homepage
    if (!loggedIn && nextState.location.pathname !== '/auth/login') {
      if (nextState.location.state && nextState.location.pathname) {
        replace(nextState.location.pathname)
      } else {
        replace('/auth/login')
      }
    }
  }
}

export default (
    <Router history={hashHistory}>
      <Route path="/" name="Dashboard" component={Full} onEnter={checkAuth}>
        // <IndexRoute component={Dashboard}  />
        <Route path="dashboard" name="Dashboard" component={Dashboard}/>
        <Route path="clients" name="Clients">
          <IndexRoute component={Clients}/>
          <Route path="add" name="Add Client" component={AddClient}/>
          <Route path="detail/:clientId" name="View" component={ViewClient}/>
        </Route>
        <Route path="trainers" name="Trainers">
          <IndexRoute component={Trainers}/>
          <Route path="add" name="Add PT" component={AddTrainer}/>
          <Route path="view" name="Details" component={ViewTrainer}/>
        </Route>

        <Route path="categories" name="Category Manager" component={Categories}/>
        <Route path="workouts" name="Session manager" component={Workouts}/>

        <Route path="article" name="Article Manager">
          <IndexRoute component={Article}/>
          <Route path="add" name="Add Article" component={AddArticle}/>
        </Route>
        <Route path="pages/about-us" name="About Us" component={About}/>
        <Route path="pages/term-conditions" name="Term & Conditions" component={TermConditions}/>
        <Route path="pages/privacy" name="Privacy Policy" component={Privacy}/>
      </Route>
      <Route path="auth/" name="Auth" component={Simple}>
        <IndexRoute component={Login}/>
        <Route path="login" name="Login" component={Login}/>
      </Route>
    </Router>

);

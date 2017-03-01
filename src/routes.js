import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';

import reducer from './reducers'
import rootSaga from './sagas'
import {clearError} from './actions'

import Full from './containers/Full/'
import Simple from './containers/Simple/'


import Dashboard from './views/Dashboard/'
import Clients from './views/Clients/List/'
import AddClient from './views/Clients/Add/'
import EditClient from './views/Clients/List/'
import Trainers from './views/Trainers/'
import Categories from './views/Categories/'
import Workouts from './views/Workouts/'
import Login from './views/Pages/Login/'
import Register from './views/Pages/Register/'
import Page404 from './views/Pages/Page404/'
import Page500 from './views/Pages/Page500/'

let logger = createLogger({
  // Ignore `CHANGE_FORM` actions in the logger, since they fire after every keystroke
  predicate: (getState, action) => action.type !== 'CHANGE_FORM'
})

let sagaMiddleware = createSagaMiddleware()

let store = createStore(reducer, applyMiddleware(logger, sagaMiddleware))
// We run the root saga automatically
sagaMiddleware.run(rootSaga)

/**
* Checks authentication status on route change
* @param  {object}   nextState The state we want to change into when we change routes
* @param  {function} replace Function provided by React Router to replace the location
*/
function checkAuth (nextState, replace) {
  let {loggedIn} = store.getState()

  store.dispatch(clearError())

  // Check if the path isn't dashboard. That way we can apply specific logic to
  // display/render the path we want to
  if (nextState.location.pathname !== '/dashboard' && nextState.location.pathname !== '/pages/login') {
    if (loggedIn) {
      if (nextState.location.state && nextState.location.pathname) {
        replace(nextState.location.pathname)
      } else {
        replace('/pages/login')
      }
    }
    else{
      replace('/pages/login')
    }
  } else {
    alert('hi');
    // If the user is already logged in, forward them to the homepage
    if (!loggedIn && nextState.location.pathname !== '/pages/login') {
      if (nextState.location.state && nextState.location.pathname) {
        replace(nextState.location.pathname)
      } else {
        replace('/pages/login')
      }
    }
  }
}

export default (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" name="Dashboard" component={Full}>
        <IndexRoute component={Dashboard}  />
        <Route path="dashboard" name="Dashboard" component={Dashboard}/>
        <Route path="clients/" name="Clients">
          <IndexRoute component={Clients}/>
          <Route path="list" name="Client Manager" component={Clients}/>
          <Route path="add" name="Add Client" component={AddClient}/>
          <Route path="edit" name="Edit Client" component={EditClient}/>
        </Route>
        <Route path="trainers" name="PT Manager" component={Trainers}/>
        <Route path="categories" name="Category Manager" component={Categories}/>
        <Route path="workouts" name="Work out Manager" component={Workouts}/>
      </Route>
      <Route path="pages/" name="Pages" component={Simple}>
        <IndexRoute component={Page404}/>
        <Route path="login" name="Login Page" component={Login}/>
        <Route path="register" name="Register Page" component={Register}/>
        <Route path="404" name="Page 404" component={Page404}/>
        <Route path="500" name="Page 500" component={Page500}/>
      </Route>
    </Router>
  </Provider>
);

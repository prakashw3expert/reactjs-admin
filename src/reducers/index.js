/*
 * The reducer takes care of state changes in our app through actions
 */

import * as AppAction from '../actions/App'



import auth from '../auth'

// The initial application state
let initialState = {
  loggedIn: auth.loggedIn()
}

/**
 * App
 * Redux Reducer for App action
 * Reference: http://redux.js.org/docs/basics/Reducers.html
 * @param state
 * @param action
 * @returns {*}
 * @constructor
 */
function App (state = initialState, action) {

  switch (action.type) {
    case AppAction.INIT_DONE:
      return {...state, loggedIn: false}


    default:
      return state
  }
}

export default App

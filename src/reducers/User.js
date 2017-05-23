import * as UserActions from '../actions/User'

/**
 * initialState
 * @type {{id: string, fb_uid: string, first_name: string, last_name: string, email: string}}
 */
const initialState = {
    id: '',
    name: '',
    email: '',
    authKey: '',
}

/**
 * User
 * Redux Reducer for User action
 * Reference: http://redux.js.org/docs/basics/Reducers.html
 * @param state
 * @param action
 * @returns {*}
 * @constructor
 */
function User(state = initialState, action) {

    switch (action.type) {
        case UserActions.LOGIN:
            return Object.assign({}, state, action.response)


        case UserActions.LOGOUT:
            return Object.assign({}, state, initialState)


      default:
        return state

    }


}

export default User

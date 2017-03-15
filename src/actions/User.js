// import config from 'config'

/**
 * FB_LOGIN
 * @type {string}
 */
export const LOGIN = 'USER_LOGIN'

/**
 * _fbLoginInitial
 * @param initial
 * @private
 */
const _loginInitial = (initial) => ({ type: LOGIN, initial, })

/**
 * fbLogin
 * Performs Facebook login, and on success posts return data to API
 * Redux Action
 * Reference: http://redux.js.org/docs/basics/Actions.html
 * @param response {Object}
 * @returns {Function}
 */
export function login(response) {

    return dispatch => {
        var res = {};
        dispatch(_loginInitial(res));
    }
}

/**
 * LOGOUT
 * @type {string}
 */
export const LOGOUT = 'USER_LOGOUT'

/**
 * _logoutRequest
 * @private
 */
export const _logoutRequest = () => ({ type: LOGOUT, })

/**
 * _logoutResponse
 * @param response
 * @private
 */
export const _logoutResponse = (response) => ({ type: LOGOUT, response, })

/**
 * logout
 * Performs Facebook logout for a given user
 * Redux Action
 * Reference: http://redux.js.org/docs/basics/Actions.html
 * @returns {Function}
 */
export function logout() {
    return dispatch => {
        dispatch(_logoutRequest())
        // FB.logout(response => {
        //     dispatch(_logoutResponse(response))
        // })
    }
}

import * as axios from 'axios'
import { hashHistory } from 'react-router';
import AppConfig from  "../Config/AppConfig"

let localStorage

// If we're testing, use a local storage polyfill
if (global.process && process.env.NODE_ENV === 'test') {
  localStorage = require('localStorage')
} else {
  // If not, use the browser one
  localStorage = global.window.localStorage
}


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
 * _loadResponse
 * @param response
 * @private
 */
const _loginResponse = (response) => ({ type: LOGIN, response, })

/**
 * fbLogin
 * Performs Facebook login, and on success posts return data to API
 * Redux Action
 * Reference: http://redux.js.org/docs/basics/Actions.html
 * @param response {Object}
 * @returns {Function}
 */
export function login(data) {

  return (dispatch, getState) => {
      dispatch(_loginInitial(data))
      axios.post(AppConfig.ApiUrl + "admins/login", data)
      .then(res => {
          var responseData = {
            id : res.data.userId,
            authKey : res.data.id
          };
          localStorage.ptspotter_accessToken = res.data.id;
          localStorage.ptspotter_userId = res.data.userId
          dispatch(_loginResponse(responseData));
          hashHistory.push('/dashboard');
          

      })
      .catch(function (error) {
          alert('Login Failed. Please Check Email & Password.');
      });
  }

}


/**
 * fbLogin
 * Performs Facebook login, and on success posts return data to API
 * Redux Action
 * Reference: http://redux.js.org/docs/basics/Actions.html
 * @param response {Object}
 * @returns {Function}
 */
export function profile(userId, authKey) {

  return (dispatch, getState) => {

      axios.get(AppConfig.ApiUrl + "admins/"+ userId + "?access_token="+authKey)
      .then(res => {
        console.log(res);
          var responseData = {
            id: res.data.id,
            name: res.data.name,
            email: res.data.email,
            authKey: authKey,
          };
          dispatch(_loginResponse(responseData));
      })
      .catch(function (error) {
          hashHistory.push('/auth/login');
      });
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
    localStorage.ptspotter_accessToken = '';
    localStorage.ptspotter_userId = '';
    hashHistory.push('/auth/login');
    return dispatch => {
        dispatch(_logoutRequest({}))
    }

}

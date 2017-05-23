import * as axios from 'axios'

import AppConfig from  "../Config/AppConfig"




/**
 * ADD
 * @type {string}
 */
export const ADD = 'CATEGORY_ADD'

/**
 * add
 * @param response
 * @returns {{type: string, response: *}}
 */
export function add(response) {
    return {
        type: ADD,
        response,
    }
}

/**
 * LOAD
 * @type {string}
 */
export const LOAD = 'CATEGORY_LOAD'

/**
 * _loadRequest
 * @private
 */
const _loadRequest = () => ({ type: LOAD, })

/**
 * _loadResponse
 * @param response
 * @private
 */
const _loadResponse = (response) => ({ type: LOAD, response, })


/**
 * load
 * Get Category uploads from the API based on user id
 * Redux Action
 * Reference: http://redux.js.org/docs/basics/Actions.html
 * @param id user id
 * @returns {Function}
 */
export function load(options) {
    var filter = (options) ? '?filter=' + encodeURIComponent(JSON.stringify(options)) : '';

    return (dispatch, getState) => {
        dispatch(_loadRequest())
        axios.get(AppConfig.ApiUrl + "categories" + filter)
        ///.then((response) => response.json())
        .then(res => {
          console.log(res.data);
            dispatch(_loadResponse(res.data))
        })
    }
}

/**
 * COUNT
 * @type {string}
 */
export const COUNT = 'CATEGORY_COUNT'


/**
 * _loadResponse
 * @param response
 * @private
 */
const _countResponse = (response) => ({ type: COUNT, response, })


/**
 * load
 * Get Category uploads from the API based on user id
 * Redux Action
 * Reference: http://redux.js.org/docs/basics/Actions.html
 * @param id user id
 * @returns {Function}
 */
export function count(options) {
    var filter = (options && options['where']) ? '?where=' + encodeURIComponent(JSON.stringify(options['where'])) : '';
    return (dispatch, getState) => {
        dispatch(_loadRequest())
        axios.get(AppConfig.ApiUrl + "categories/count" + filter)
        .then(res => {
            dispatch(_countResponse(res.data))
        })
    }
}

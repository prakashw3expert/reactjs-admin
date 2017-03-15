/**
 * INIT
 * @type {string}
 */
export const INIT = 'APP_INIT'

/**
 * init
 * loads photos and activities
 * Redux Action
 * Reference: http://redux.js.org/docs/basics/Actions.html
 * @returns {Function}
 */
export function init() {
    return dispatch => {
        Promise.all([

        ]).then(() => {
            dispatch(initDone())
        })
    }
}


/**
 * INIT_DONE
 * @type {string}
 */
export const INIT_DONE = 'APP_INIT_DONE'

/**
 * initDone
 * @returns {{type: string}}
 */
export function initDone() {
    return {
        type: INIT_DONE
    }
}

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

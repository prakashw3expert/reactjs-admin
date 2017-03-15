import {
    Cateory as CategoryActions,
} from '../actions'

/**
 * initialState
 * @type {{id: string, caption: string, created_at: string, email: string, fb_uid: string, filename: string, first_name: string, hashtags: string, last_name: string, latitude: string, liked: string, location: string, longitude: string, modified_at: string, user_id: string, loading: boolean}}
 */
const initialState = {
    id: '',
    name: '',
    status: '',
    created: '',
    modified: '',
    loading: false,
}

/**
 * Photo
 * Redux Reducer for Photo action
 * Reference: http://redux.js.org/docs/basics/Reducers.html
 * @param state
 * @param action
 * @returns {*}
 * @constructor
 */
function Category(state = initialState, action) {

    switch (action.type) {
        case CategoryActions.LOAD:
            if (action.response) {
                const res = action.response
                return Object.assign({}, state, {
                    id: res.id,
                    name: res.name,
                    status: res.status,
                    created: res.created,
                    modified: res.modified,

                })
            }

            return Object.assign({}, state, { loading: true })
    }

    return state
}

export default Category

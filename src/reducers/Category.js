import * as CategoryActions from '../actions/Category'

/**
 * initialState
 * @type {{id: string, caption: string, created_at: string, email: string, fb_uid: string, filename: string, first_name: string, hashtags: string, last_name: string, latitude: string, liked: string, location: string, longitude: string, modified_at: string, user_id: string, loading: boolean}}
 */
const initialState = {
    data: [],
    totalRecords : 119
}

/**
 * Category
 * Redux Reducer for Category action
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

              return Object.assign({}, state, {
                  data: action.response
              })

                // return [
                //     ...action.response,
                // ]
            }
            return [];

          case CategoryActions.COUNT:
              if (action.response) {
                return Object.assign({}, state, {
                    totalRecords: action.response.count
                })

                // const s = [...state]
                // s.count = action.response.count;
                // return s
              }
              break;

            default:
              return state
    }

}

export default Category

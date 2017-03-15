// import config from 'config'

import 'whatwg-fetch'

export const baseUrl = 'http://localhost:3001/api/v1/'

/**
 * load
 * Gets single photo upload from API based on upload id
 * Redux Action
 * Reference: http://redux.js.org/docs/basics/Actions.html
 * @param id upload id
 * @returns {Function}
 */
export function load(endpoint, options) {
  var url = baseUrl + endpoint;
  if (options) {
    url += '?filter=' + encodeURIComponent(JSON.stringify(options));
  }

  console.log(options);
      return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          return responseJson;
        })
        .catch((error) => {
          console.error(error);
        });


}

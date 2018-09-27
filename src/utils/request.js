import fetch from 'dva/fetch';
import {getAccessToken} from "./authority";

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {object} [options] The options we want to pass to "fetch"
 * {
 *   url: user,
 *   method: 'get',
 *   data: params,
 *   headers:{}
 * }
 * {
 *      method: 'POST',
 *      mode: 'cors',
 *      body:JSON.stringify(tubState),
 *      headers:myHeaders
 *}
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(options) {

  const url = options.url;
  const accessToken = getAccessToken();

  const option = {
    method: options.method,
    mode: 'cors',
    body: JSON.stringify(options.params),
    ssl: false,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'accessToken': accessToken
    }
  }
  const response = await fetch(url, option);
  console.log('response ', response);
  checkStatus(response);
  return await response.json();
}

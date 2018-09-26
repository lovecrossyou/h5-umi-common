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

  const opt = Object.assign(options, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'accessToken': accessToken
    },
  })

  console.log('opt ', opt);
  const response = await fetch(url, opt);
  checkStatus(response);
  const data = await response.json();

  const ret = {
    data,
    headers: {},
  };

  return ret;
}

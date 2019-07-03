import axios from 'axios';

function handleError(response) {
  if (response.response === undefined) {
    return response.response;
  }
  const error = {};
  const unknowns = [];
  for (let i = 0; i < response.response.data.errors.length; i += 1) {
    const e = response.response.data.errors[i];
    if (e.source) {
      error[e.source] = e.detail;
    } else {
      unknowns.push(e.detail);
    }
  }
  error.unknowns = unknowns;
  throw error;
}

export function postRequest(url, params) {
  return axios.post(url, params).catch(handleError);
}

export function getRequest(url, options) {
  return axios.get(url, options).catch(handleError);
}

export function putRequest(data, url) {
  return axios.put(url, data).catch(handleError);
}

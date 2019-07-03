import {
  GET_REQ_LOADED,
  GET_REQUEST,
  POST_REQUEST,
  SUCCESSFUL_POST,
  RESET_REDIRECT,
  PUT_REQUEST,
  SUCCESSFUL_PUT,
} from './constants';

export function getRequest(url) {
  return {
    type: GET_REQUEST,
    verb: 'get',
    url,
  };
}

export function successfulGet(response) {
  return {
    type: GET_REQ_LOADED,
    response: response.data,
  };
}

export function putRequest(data, url) {
  return {
    type: PUT_REQUEST,
    data,
    url,
    verb: 'put',
  };
}

export function successfulPut(response) {
  return {
    type: SUCCESSFUL_PUT,
    updatedResource: response.data,
  };
}

export function postRequest(formData, url) {
  return {
    type: POST_REQUEST,
    formData,
    url,
    verb: 'post',
  };
}

export function successfulPost(response) {
  return {
    type: SUCCESSFUL_POST,
    createdResource: response.data,
    redirect: true,
  };
}

export function resetRedirect() {
  return {
    type: RESET_REDIRECT,
    redirect: false,
  };
}

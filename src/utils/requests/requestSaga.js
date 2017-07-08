import { call, put, fork, takeEvery } from 'redux-saga/effects';
import { POST_REQUEST, GET_REQUEST, PUT_REQUEST } from './constants';
import parsedErrors from '../errors/errorActions';
import { postRequest, getRequest, putRequest } from './request';
import { successfulGet, successfulPost, resetRedirect, successfulPut } from './requestActions';

// possibly an abstraction too far too early
// maybe different sagas for get and post requests would be good

const requestType = {
  post: { request: postRequest, action: successfulPost },
  get: { request: getRequest, action: successfulGet },
  put: { request: putRequest, action: successfulPut },
};

export function* makeRequest({ formData, url, verb }) {
  const request = requestType[verb];
  try {
    const response = yield call(request.request, url, formData);
    yield put(request.action(response));
    yield put(resetRedirect());
  } catch (err) {
    yield put(parsedErrors(err));
  }
}

export function* watchRequest() {
  yield fork(takeEvery, POST_REQUEST, makeRequest);
  yield fork(takeEvery, GET_REQUEST, makeRequest);
  yield fork(takeEvery, PUT_REQUEST, makeRequest);
}

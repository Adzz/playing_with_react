import { spawn, all } from 'redux-saga/effects';
import { watchRequest } from './utils/requests/requestSaga';

export default function* rootSaga() {
  yield all([
    spawn(watchRequest),
  ]);
}

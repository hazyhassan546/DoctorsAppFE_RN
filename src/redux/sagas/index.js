import {all, fork} from 'redux-saga/effects';
import nameSaga from './nameSaga';
import authSaga from './authSaga';
import hospitalSaga from './hospitalSaga';

export default function* rootSaga() {
  yield all([fork(nameSaga), fork(authSaga), fork(hospitalSaga)]);
}

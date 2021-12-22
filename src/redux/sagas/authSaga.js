import {all, take, call, put, fork} from 'redux-saga/effects';
import {authActionCreator} from '../actions/auth.actions';
import {LoginApi} from '../Api/apiCalls';
import {LOGIN} from '../types/auth.types';
import auth from '@react-native-firebase/auth';

function* loginSaga({payload}) {
  try {
    const response = yield call(LoginApi, payload);
    yield put(authActionCreator.loginUserSuccess(response.user));
  } catch (err) {
    console.log(err);
    console.log('Not signed in!');
    let error = '';
    if (err.code === 'auth/user-not-found') {
      error = 'Account not exist';
    } else if (err.code === 'auth/wrong-password') {
      error = 'Wrong password';
    }
    yield put(authActionCreator.loginUserError(error));
  }
}

function* loginWatchersSaga() {
  while (true) {
    const action = yield take(LOGIN);
    yield* loginSaga(action);
  }
}

export default function* () {
  yield all([fork(loginWatchersSaga)]);
}

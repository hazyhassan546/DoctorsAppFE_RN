import {all, take, call, put, fork} from 'redux-saga/effects';
import {authActionCreator} from '../actions/auth.actions';
import {LoginApi, SignUpApi} from '../Api/apiCalls';
import {LOGIN, SIGNUP} from '../types/auth.types';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';

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

function* signUpSaga({payload}) {
  try {
    // it will give us a user with a account created at firebase
    const response = yield call(SignUpApi, payload);
    console.log(response.user);
    // lets upload user image
    const StorageReference = storage().ref(
      'DoctorAppStorage/' + response.user.uid + '_profile_picture.png',
    );
    yield StorageReference.putFile(payload.image.fileUri);
    const url = yield storage()
      .ref('DoctorAppStorage/' + response.user.uid + '_profile_picture.png')
      .getDownloadURL();
    // now we have to save that user profile to our firebase db.
    yield database()
      .ref('/DoctorApp/users/' + response.user.uid)
      .set({
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        password: payload.password,
        address: payload.address,
        gender: payload.gender,
        image: url,
      })
      .then(() => console.log('Data set.'));
    yield put(authActionCreator.signupSuccess(response.user));
  } catch (err) {
    console.log(err);
    console.log('Not signed up!');
    let error = '';
    if (err.code === 'auth/email-already-in-use') {
      error = 'email already in use';
    } else if (err.code === 'auth/invalid-email') {
      error = 'auth/invalid-email';
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

function* signUpWatchersSaga() {
  while (true) {
    const action = yield take(SIGNUP);
    yield* signUpSaga(action);
  }
}

export default function* () {
  yield all([fork(loginWatchersSaga), fork(signUpWatchersSaga)]);
}

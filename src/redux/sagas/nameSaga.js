import {all, take, call, put, fork} from 'redux-saga/effects';
import {nameActionCreator} from '../actions/nameActions';
import {GET_NAMES} from '../types/types';

function* getNameSaga({payload}) {
  try {
    // const response = yield call(getNamesApi, payload);
    // alphabet = alpha?.map(x => {
    //   return {title: String.fromCharCode(x).toLowerCase(), data: []};
    // });
    // if (response?.length > 0) {
    //   response?.map((item, index) => {
    //     const word = item.name.charAt(0).toLowerCase();
    //     let alphabetsString = 'abcdefghijklmnopqrstuvwxyz';
    //     if (alphabetsString.indexOf(word) > -1) {
    //       alphabet[alphabetsString.indexOf(word)].data.push(item);
    //     }
    //   });
    // }
    // const result = [];
    // yield alphabet?.map((item, index) => {
    //   if (item?.data?.length > 0) {
    //     result.push(item);
    //   }
    // });
    // yield put(nameActionCreator.getNamesSuccess(result));
  } catch (err) {
    console.log(err);
    yield put(nameActionCreator.getNamesError(err));
  }
}

function* getNamesWatchersSaga() {
  while (true) {
    const action = yield take(GET_NAMES);
    yield* getNameSaga(action);
  }
}

export default function* () {
  yield all([fork(getNamesWatchersSaga)]);
}

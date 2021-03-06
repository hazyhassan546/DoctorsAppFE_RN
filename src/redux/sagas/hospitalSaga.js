import {all, take, call, put, fork} from 'redux-saga/effects';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import {AsyncStorage} from 'react-native';
// import 'react-native-get-random-values';
import * as RootNavigation from './../../helpers/navigationHelper/RootNavigation';
// import 'react-native-get-random-values';
// import {v4 as uuidv4} from 'uuid';

import Toast from 'react-native-toast-message';
import {
  GET_HOSPITALS,
  GET_CATEGORY,
  GET_DOCTORS,
  BOOK_APPOINTMENT,
  GET_APPOINTMENTS,
} from '../types/hospital.types';
import {hospitalActionCreator} from '../actions/hospital.action';

function* getHospitalSaga() {
  try {
    let hospitals = [];
    let db_ref = database().ref('/DoctorApp/hospitals/');

    yield db_ref.once('value').then(snapshot => {
      var items = [];
      snapshot.forEach(child => {
        hospitals.push(child.val());
      });
    });
    yield put(hospitalActionCreator.getHospitalSuccess(hospitals));
  } catch (err) {
    console.log(err);
    console.log('May be Not signed in!');
    // Toast.show({
    //     type: 'info',
    //     text1: 'Something went wrong'
    // });
    let error = err;
    yield put(hospitalActionCreator.getHospitalError(error));
  }
}

function* getCategorySaga({payload}) {
  try {
    let categories = [];
    let db_ref = database().ref('/DoctorApp/categories/');
    yield db_ref.once('value').then(snapshot => {
      snapshot.forEach(child => {
        categories.push(child.val());
      });
    });
    yield put(hospitalActionCreator.getCategoriesSuccess(categories));
  } catch (err) {
    console.log(err);
    yield put(hospitalActionCreator.getCategoriesError(err));
  }
}

function* bookAppointmentSaga({payload}) {
  try {
    let db_ref = yield database().ref('/DoctorApp/appointments/' + payload.id);
    yield db_ref
      .set({...payload})
      .then(() => {
        Toast.show({
          text1: 'Appointment Successfully Added',
        });
      })
      .catch(() => {
        console.log('Error');
      });
    yield put(hospitalActionCreator.bookAppointmentSuccess());
    yield put(hospitalActionCreator.showModal(true));
  } catch (err) {
    console.log(err);
    console.log('May be Not signed in!');
    let error = err;
    yield put(hospitalActionCreator.bookAppointmentError(error));
  }
}

function* getDoctorSaga({payload}) {
  try {
    let doctors = [];
    let db_ref = database().ref('/DoctorApp/doctors/');

    yield db_ref.once('value').then(snapshot => {
      snapshot.forEach(child => {
        const data = child.val();
        if (
          payload?.name?.toLowerCase() === data?.category?.toLowerCase() &&
          payload?.hospitalInfo?.name?.toLowerCase() ===
            data?.hospitalName?.toLowerCase()
        ) {
          doctors.push(data);
        }
      });
    });
    yield put(hospitalActionCreator.getDoctorSuccess(doctors));
    RootNavigation.navigate('SelectDoctor');
  } catch (err) {
    console.log(err);
    console.log('May be Not signed in!');
    // Toast.show({
    //     type: 'info',
    //     text1: 'Something went wrong'
    // });
    let error = err;
    yield put(hospitalActionCreator.getDoctorError(error));
  }
}

function* getAppointmentSaga({payload}) {
  try {
    let appointments = [];
    let db_ref = database().ref('/DoctorApp/appointments/');

    yield db_ref.once('value').then(snapshot => {
      snapshot.forEach(child => {
        const data = child.val();
        if (payload === data?.uid) {
          appointments.push(data);
        }
      });
    });
    // alert(JSON.stringify(appointments.length));
    yield put(hospitalActionCreator.getAppointmentSuccess(appointments));
    // RootNavigation.navigate('SelectDoctor');
  } catch (err) {
    console.log(err);
    console.log('May be Not signed in!');
    // Toast.show({
    //     type: 'info',
    //     text1: 'Something went wrong'
    // });
    let error = err;
    yield put(hospitalActionCreator.getAppointmentError(error));
  }
}

function* getHospitalWatchersSaga() {
  while (true) {
    const action = yield take(GET_HOSPITALS);
    yield* getHospitalSaga(action);
  }
}

function* getDoctorWatchersSaga() {
  while (true) {
    const action = yield take(GET_DOCTORS);
    yield* getDoctorSaga(action);
  }
}

function* getCategoryWatcherSaga() {
  while (true) {
    const action = yield take(GET_CATEGORY);
    yield* getCategorySaga(action);
  }
}

function* bookAppointmentWatcherSaga() {
  while (true) {
    const action = yield take(BOOK_APPOINTMENT);
    yield* bookAppointmentSaga(action);
  }
}

function* getAppointmentWatcherSaga() {
  while (true) {
    const action = yield take(GET_APPOINTMENTS);
    yield* getAppointmentSaga(action);
  }
}

export default function* () {
  yield all([
    fork(getHospitalWatchersSaga),
    fork(getCategoryWatcherSaga),
    fork(getDoctorWatchersSaga),
    fork(bookAppointmentWatcherSaga),
    fork(getAppointmentWatcherSaga),
  ]);
}

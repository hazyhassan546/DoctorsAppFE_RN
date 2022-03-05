import {createAction} from 'redux-actions';
import {
  GET_HOSPITALS,
  GET_HOSPITALS_ERROR,
  GET_HOSPITALS_SUCCESS,
  SELECT_HOSPITAL,
  SET_HOSPITAL_ERROR,
  GET_CATEGORY,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_ERROR,
  GET_DOCTORS,
  GET_DOCTORS_ERROR,
  GET_DOCTORS_SUCCESS,
  SELECT_DAY,
} from '../types/hospital.types';
export const hospitalActionCreator = {
  //
  getHospital: createAction(GET_HOSPITALS),
  getHospitalSuccess: createAction(GET_HOSPITALS_SUCCESS),
  getHospitalError: createAction(GET_HOSPITALS_ERROR),
  //
  setHospitalError: createAction(SET_HOSPITAL_ERROR),
  selectHospital: createAction(SELECT_HOSPITAL),
  selectDay: createAction(SELECT_DAY),
  //

  getDoctor: createAction(GET_DOCTORS),
  getDoctorSuccess: createAction(GET_DOCTORS_SUCCESS),
  getDoctorError: createAction(GET_DOCTORS_ERROR),

  getCategories: createAction(GET_CATEGORY),
  getCategoriesSuccess: createAction(GET_CATEGORY_SUCCESS),
  getCategoriesError: createAction(GET_CATEGORY_ERROR),
};

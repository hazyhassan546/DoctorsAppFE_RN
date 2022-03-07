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
  BOOK_APPOINTMENT,
  BOOK_APPOINTMENT_SUCCESS,
  BOOK_APPOINTMENT_ERROR,
} from '../types/hospital.types';

const defaultState = {
  loading: false,
  error: '',
  hospitals: [],
  categories: [],
  doctors: [],
  selectedHospital: null,
  selectedDay: null,
  bookingLoading: false,
  showModal: false,
};
export default function hospitalReducer(state = defaultState, action = {}) {
  const {type, payload} = action;
  switch (type) {
    case GET_HOSPITALS:
      return {
        ...state,
        loading: true,
      };
    case GET_HOSPITALS_SUCCESS:
      return {
        ...state,
        loading: false,
        hospitals: payload,
      };
    case GET_HOSPITALS_ERROR:
      return {
        ...state,
        loading: false,
      };

    case SELECT_HOSPITAL:
      return {
        ...state,
        selectedHospital: payload,
      };

    case GET_CATEGORY:
      return {
        ...state,
        loading: true,
      };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: payload,
      };
    case GET_CATEGORY_ERROR:
      return {
        ...state,
        loading: false,
      };

    case GET_DOCTORS:
      return {
        ...state,
        loading: true,
      };
    case GET_DOCTORS_SUCCESS:
      return {
        ...state,
        loading: false,
        doctors: payload,
      };
    case GET_DOCTORS_ERROR:
      return {
        ...state,
        loading: false,
      };
    case SELECT_DAY:
      return {
        ...state,
        selectedDay: payload,
      };

    case BOOK_APPOINTMENT:
      return {
        ...state,
        bookingLoading: true,
      };
    case BOOK_APPOINTMENT_SUCCESS:
      return {
        ...state,
        bookingLoading: false,
      };
    case BOOK_APPOINTMENT_ERROR:
      return {
        ...state,
        bookingLoading: false,
      };
    case 'SHOW_MODAL':
      return {
        ...state,
        showModal: payload,
      };
    default:
      return state;
  }
}

import {AsyncStorage} from 'react-native';
import Toast from 'react-native-toast-message';
import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SET_ERROR,
  SIGNUP,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  LOGOUT,
} from '../types/auth.types';

const defaultState = {
  loading: false,
  signUpSuccess: false,
  loginSuccess: false,
  user: {},
  error: '',
};

export default function AuthReducer(state = defaultState, action = {}) {
  const {type, payload} = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
        loginSuccess: false,
        error: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        loginSuccess: true,
        error: '',
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        loginSuccess: false,
        error: payload,
      };
    case SIGNUP:
      return {
        ...state,
        loading: true,
        signUpSuccess: false,
        error: '',
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        // user: payload,
        loading: false,
        signUpSuccess: true,
        error: '',
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        signUpSuccess: false,
        error: payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

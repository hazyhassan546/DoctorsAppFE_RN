import Toast from 'react-native-toast-message';
import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SET_ERROR,
} from '../types/auth.types';

const defaultState = {
  loading: false,
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
        error: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        error: '',
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}

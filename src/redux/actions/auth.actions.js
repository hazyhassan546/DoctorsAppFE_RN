import {createAction} from 'redux-actions';
import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SET_ERROR,
  SIGNUP,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
} from '../types/auth.types';

export const authActionCreator = {
  loginUser: createAction(LOGIN),
  loginUserSuccess: createAction(LOGIN_SUCCESS),
  loginUserError: createAction(LOGIN_ERROR),
  signupUser: createAction(SIGNUP),
  signupSuccess: createAction(SIGNUP_SUCCESS),
  signupError: createAction(SIGNUP_ERROR),
  setError: createAction(SET_ERROR),
};

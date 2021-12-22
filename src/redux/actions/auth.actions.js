import {createAction} from 'redux-actions';
import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SET_ERROR,
} from '../types/auth.types';

export const authActionCreator = {
  loginUser: createAction(LOGIN),
  loginUserSuccess: createAction(LOGIN_SUCCESS),
  loginUserError: createAction(LOGIN_ERROR),
  setError: createAction(SET_ERROR),
};

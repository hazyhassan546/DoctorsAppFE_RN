import {combineReducers} from 'redux';
import namesData from './nameReducer';
import authData from './authReducer';
import hospitalData from './hospitalReducer';
import notificationData from './notificationReducers';

const appReducer = combineReducers({
  namesData,
  authData,
  hospitalData,
  notificationData,
});

export default function rootReducer(state, action) {
  return appReducer(state, action);
}

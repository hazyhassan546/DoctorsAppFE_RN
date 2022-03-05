import {combineReducers} from 'redux';
import namesData from './nameReducer';
import authData from './authReducer';
import hospitalData from './hospitalReducer';

const appReducer = combineReducers({
  namesData,
  authData,
  hospitalData,
});

export default function rootReducer(state, action) {
  return appReducer(state, action);
}

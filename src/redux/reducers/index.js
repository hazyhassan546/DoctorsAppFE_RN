import {combineReducers} from 'redux';
import namesData from './nameReducer';
import authData from './authReducer';

const appReducer = combineReducers({
  namesData,
  authData,
});

export default function rootReducer(state, action) {
  return appReducer(state, action);
}

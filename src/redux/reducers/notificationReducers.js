// import {AsyncStorage} from 'react-native';
import Toast from 'react-native-toast-message';
import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from '../types/notification.types';

const defaultState = {
  notifications: [],
};

export default function NotificationReducer(state = defaultState, action = {}) {
  const {type, payload} = action;
  switch (type) {
    case ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [payload, ...state.notifications],
      };
    case REMOVE_NOTIFICATION:
      return {
        ...state,
      };
    default:
      return state;
  }
}

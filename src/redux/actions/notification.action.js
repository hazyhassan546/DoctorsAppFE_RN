import {createAction} from 'redux-actions';
import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from '../types/notification.types';

export const notificationActionCreator = {
  addNotification: createAction(ADD_NOTIFICATION),
  removeNotification: createAction(REMOVE_NOTIFICATION),
};

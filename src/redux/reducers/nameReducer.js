import Toast from 'react-native-toast-message';
import {} from '../types/types';

const defaultState = {};
export default function nameReducer(state = defaultState, action = {}) {
  const {type, payload} = action;
  switch (type) {
    // case GET_NAMES:
    //   return {
    //     ...state,
    //     loading: true,
    //     getNameSuccess: false,
    //     getNameError: false,
    //     error: '',
    //   };
    default:
      return state;
  }
}

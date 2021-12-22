import {ENUMS} from '../../common/routes';
import {API} from '../../helpers/apiHelper';
import auth from '@react-native-firebase/auth';

// export function getNamesApi(params) {
//   return API({
//     method: "POST",
//     url: ENUMS.baseURL + ENUMS.mainApi,
//     data: params,
//   }).then((response) => response.data);
// }

export function LoginApi(params) {
  return auth().signInWithEmailAndPassword(params.email, params.password);
}

export function LogOutApi(params) {
  return auth().signOut();
}

import { ENUMS } from '../../common/routes';
import { API } from '../../helpers/apiHelper';
import auth from '@react-native-firebase/auth';

export function LoginApi(params) {
  return auth().signInWithEmailAndPassword(params.email, params.password);
}

export function SignUpApi(params) {
  return auth().createUserWithEmailAndPassword(params.email, params.password);
}

export function LogOutApi(params) {
  return auth().signOut();
}

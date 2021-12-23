import {authConnect} from '../../redux/connectors/authConnect';
import ForgetPassword from './ForgetPassword';
export default authConnect()(ForgetPassword);

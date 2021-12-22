import {authConnect} from '../../redux/connectors/authConnect';
import Login from './Login';
export default authConnect()(Login);

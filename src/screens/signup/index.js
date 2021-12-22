import {authConnect} from '../../redux/connectors/authConnect';
import Signup from './Signup';
export default authConnect()(Signup);

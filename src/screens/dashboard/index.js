import {authConnect} from '../../redux/connectors/authConnect';
import Dashboard from './Dashboard';
export default authConnect()(Dashboard);

import {authConnect} from '../../redux/connectors/authConnect';
import {hospitalConnect} from '../../redux/connectors/hospitalConnect';
import Dashboard from './Dashboard';
export default hospitalConnect()(authConnect()(Dashboard));

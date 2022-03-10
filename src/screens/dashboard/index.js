import {authConnect} from '../../redux/connectors/authConnect';
import {hospitalConnect} from '../../redux/connectors/hospitalConnect';
import {notificationConnect} from '../../redux/connectors/notificationConnect';
import Dashboard from './Dashboard';
export default notificationConnect()(
  hospitalConnect()(authConnect()(Dashboard)),
);

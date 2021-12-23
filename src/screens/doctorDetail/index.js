import {authConnect} from '../../redux/connectors/authConnect';
import DoctorDetail from './DoctorDetail';
export default authConnect()(DoctorDetail);

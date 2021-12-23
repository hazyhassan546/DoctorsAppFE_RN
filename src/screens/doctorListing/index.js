import {authConnect} from '../../redux/connectors/authConnect';
import DoctorListing from './DoctorListing';
export default authConnect()(DoctorListing);

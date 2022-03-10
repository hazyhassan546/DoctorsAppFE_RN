import {connect} from 'react-redux';
import {notificationActionCreator} from '../actions/notification.action';

function mapStateToProps({notificationData}) {
  return {
    notificationData,
  };
}

const mapDispatchToProps = {...notificationActionCreator};

export function notificationConnect(configMapStateToProps = mapStateToProps) {
  return connect(configMapStateToProps, mapDispatchToProps);
}

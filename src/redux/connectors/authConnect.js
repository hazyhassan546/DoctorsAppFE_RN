import {connect} from 'react-redux';
import {authActionCreator} from '../actions/auth.actions';

function mapStateToProps({authData}) {
  return {
    authData,
  };
}

const mapDispatchToProps = {...authActionCreator};

export function authConnect(configMapStateToProps = mapStateToProps) {
  return connect(configMapStateToProps, mapDispatchToProps);
}

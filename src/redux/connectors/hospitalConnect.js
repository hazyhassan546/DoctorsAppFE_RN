import { connect } from 'react-redux';
import { hospitalActionCreator } from '../actions/hospital.action';

function mapStateToProps({ hospitalData }) {
    return {
        hospitalData,
    };
}

const mapDispatchToProps = { ...hospitalActionCreator };

export function hospitalConnect(configMapStateToProps = mapStateToProps) {
    return connect(configMapStateToProps, mapDispatchToProps);
}

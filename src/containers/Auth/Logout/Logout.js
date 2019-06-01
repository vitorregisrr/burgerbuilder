import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import * as dispatchActions from '../../../store/actions/index';

const Logout = props => {

    useEffect(() => {
        props.onLogout();
    }, [props]);

    return <Redirect to="/auth"/>
}

const mapStateToProps = store => {
    return {isAuth: store.auth.token}
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(dispatchActions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
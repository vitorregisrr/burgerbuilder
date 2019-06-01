import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import axios from '../../axios.instance';
import Spinner from '../../components/UI/Spinner/Spinner';
import {Jumbotron, Container, Row} from 'react-bootstrap';
import Order from '../../components/Order/Order';
import errorHandler from '../../hoc/errorHandler/errorHandler';
import * as dispatchActions from '../../store/actions/index';

const Orders = props => {
    useEffect(() => {
        props.onFetchOrders(props.authToken, props.userId);
    }, []);

    let orders = null;
    if (props.orders) {
        orders = props
            .orders
            .map(order => (<Order key={order.id} {...order}/>))
    }

    return (
        <Container>
            {!props.loading
                ? (
                    <Jumbotron>
                        <Row>
                            {orders}
                        </Row>
                    </Jumbotron>
                )
                : (<Spinner/>)}
        </Container>
    )
}

const mapStateToProps = state => {
    return {orders: state.order.orders, loading: state.order.loading, error: state.order.error, authToken: state.auth.token, userId: state.auth.userId}
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(dispatchActions.fetch_orders(token, userId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(Orders, axios));
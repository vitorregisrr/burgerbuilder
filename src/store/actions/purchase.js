import * as actionTypes from './types';
import axios from '../../axios.instance';

export const purchase_init = () => {
    return{
        type: actionTypes.PURCHASE_INIT
    }
}

const fetch_purchase_start = () => {
    return{
        type: actionTypes.PURCHASE_START
    }
}

const fetch_purchase_success = (orders) => {
    return{
        type: actionTypes.PURCHASE_SUCCESS,
        orders
    }
}

const fetch_purchase_failed = (error) => {
    return{
        type: actionTypes.PURCHASE_FAILED,
        error
    }
}

export const purchase = (order, token) => {
    return dispatch => {
        dispatch(fetch_purchase_start());
        axios
        .post('/orders.json?auth=' + token, order)
        .then( response => dispatch(fetch_purchase_success() ))
        .catch( err => dispatch(fetch_purchase_failed(err)));
    }
  
}
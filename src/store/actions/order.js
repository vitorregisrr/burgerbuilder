import * as actionTypes from './types';

export const fetch_orders_success = (data) => {
    return{
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        data
    }
}

export const fetch_orders_failed = (error) => {
    return{
        type: actionTypes.FETCH_ORDERS_FAILED,
        error
    }
}

export const fetch_orders = (token, userId) => {
    return{
        type: actionTypes.FETCH_ORDERS_START,
        token,
        userId
    }
}
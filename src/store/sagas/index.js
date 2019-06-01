import { takeEvery } from 'redux-saga/effects';

import { logoutSaga, checkAuthTimeoutSaga, authSaga, checkAuthStateSaga } from './auth';
import { initIngredients } from './burger';
import { fetchOrders } from './orders';

import * as actionTypes from '../actions/types';

export function* watchAuth(){
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_STATE, checkAuthStateSaga);
    yield takeEvery(actionTypes.AUTH_START, authSaga);
}

export function* watchBurger(){
    yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredients);
}

export function* watchOrders(){
    yield takeEvery(actionTypes.FETCH_ORDERS_START, fetchOrders);
}
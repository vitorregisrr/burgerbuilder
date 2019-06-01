import * as actionTypes from '../actions/types';

const initialState = {
    loading: false,
    error: false,
    orders: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

            ///// START FETCHING DATA /////
        case actionTypes.FETCH_ORDERS_START:
            state = {
                ...state,
                loading: true
            }

            break;

            ///// PURCHASE FETCH FAILED /////
        case actionTypes.FETCH_ORDERS_FAILED:
            state = {
                ...state,
                error: action.error,
                loading: false
            }
            break;

            ///// PURCHASE FETCH SUCCESS /////
        case actionTypes.FETCH_ORDERS_SUCCESS:
            state = {
                ...state,
                loading: false,
                orders: action.data
            }
            break;

        default:
    }

    return state;
}

export default reducer;
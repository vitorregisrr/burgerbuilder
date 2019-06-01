import * as actionTypes from '../actions/types';
const initialState = {
    loading: false,
    purchased: false,
    orders: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

            ///// BURGER NOT PURCHASED YET /////
        case actionTypes.PURCHASE_INIT:
            state = {
                ...state,
                purchased: false
            }

            break;

            ///// START FETCHING DATA /////
        case actionTypes.PURCHASE_START:
            state = {
                ...state,
                loading: true,
                purchased: false
            }

            break;

            ///// PURCHASE FETCH FAILED /////
        case actionTypes.PURCHASE_FAILED:
            state = {
                ...state,
                error: action.error,
                loading: false
            }
            break;

            ///// PURCHASE FETCH SUCCESS /////
        case actionTypes.PURCHASE_SUCCESS:
            state = {
                ...state,
                loading: false,
                purchased: true
            }
            break;

        default:
    }

    return state;
}

export default reducer;
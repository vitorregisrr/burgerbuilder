import * as actionTypes from '../actions/types';

const initialState = {
    userId: null,
    token: null,
    loading: false,
    error: false,
    redirectPath: '/'
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.AUTH_START:
            state = {
                ...state,
                loading: true
            }
            break;

        case actionTypes.AUTH_SUCCESS:
            state = {
                ...state,
                token: action.token,
                userId: action.userId,
                loading: false
            }
            break;

        case actionTypes.AUTH_LOGOUT:
            state = {
                ...state,
                token: null,
                userId: null
            }
            break;

        case actionTypes.AUTH_FAILED:
            state = {
                ...state,
                loading: false,
                error: action.error
            }
            break;

        case actionTypes.SET_AUTH_REDIRECT_PATH:
            state = {
                ...state,
                redirectPath: action.path
            }
            break;
        default:
    }

    return state;
}

export default reducer;
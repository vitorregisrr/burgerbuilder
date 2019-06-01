import * as actionTypes from './types';

export const auth_success = (token, userId, expiration) => {
    return {type: actionTypes.AUTH_SUCCESS, token, userId, expiration}
}

export const auth_failed = error => {
    return {type: actionTypes.AUTH_FAILED, error: error.response.data.error}
}

export const set_auth_redirect_path = path => {
    return {type: actionTypes.SET_AUTH_REDIRECT_PATH, path}
}

export const logout = () => {
    return {type: actionTypes.AUTH_INITIATE_LOGOUT}
}

export const logout_succed = () => {
    return {type: actionTypes.AUTH_LOGOUT }
}

export const checkAuthTimeout = expirationTime => {
    return{
        type: actionTypes.AUTH_CHECK_TIMEOUT,
        expirationTime
    }
}

export const auth = (email, password, method) => {
    return {
        type: actionTypes.AUTH_START,
        email,
        password,
        method
    }
}

export const check_auth_state = () => {
   return{
       type: actionTypes.AUTH_CHECK_STATE
   }
}
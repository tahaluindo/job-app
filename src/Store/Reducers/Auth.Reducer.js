import {
    AUTH_AUTH_LOADING,
    AUTH_AUTH_LOADED,
    AUTH_RELOADE_PAGE,
    AUTH_LOGIN_SUCCESS,
    AUTH_USER_LOADED,
    AUTH_USER_EXPIRED,
    AUTH_LOGOUT_SUCCESS,
} from '../Actions/Type.Action'

const initialState = {
    Token: localStorage.getItem('ERecEtana_token'),
    isAuth: localStorage.getItem('ERecEtana_isAuth'),
    isUserLoading: false,
    User: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case AUTH_AUTH_LOADING:
            return {
                ...state,
                isUserLoading: true,
            }
        case AUTH_AUTH_LOADED:
            return {
                ...state,
                isUserLoading: false,
            }
        case AUTH_USER_LOADED:
            return {
                ...state,
                User: action.payload
            }
        case AUTH_RELOADE_PAGE:
            window.location.reload(true)
            return {
                ...state,
            }
        case AUTH_LOGIN_SUCCESS:
            // localStorage.setItem('ERecEtana_token', action.payload.token)
            localStorage.setItem('ERecEtana_token', action.payload.UserName)
            localStorage.setItem('ERecEtana_isAuth', true)
            return {
                ...state,
                ...action.payload,
                isAuth: true,
                // token: action.payload.token,
                token: action.payload.UserName,
                // User: action.payload.user
                User: action.payload
            }
        case AUTH_USER_EXPIRED:
        case AUTH_LOGOUT_SUCCESS:
            localStorage.clear();
            return {
                ...state,
                token: null,
                User: null,
                isAuth: false,
                isUserLoading: false,
            }
        default:
            return state
    }
}
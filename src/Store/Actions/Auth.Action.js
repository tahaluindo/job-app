// import axios from 'axios'

import {
    // AUTH_LOADING,
    // AUTH_LOADED,
    AUTH_LOGIN_SUCCESS,
    AUTH_USER_LOADED,
    // USER_EXPIRED,
    AUTH_RELOADE_PAGE,
    AUTH_LOGOUT_SUCCESS,
} from '../Actions/Type.Action'

// import {
//     Create_Error_Messages,
// } from './Messages.Actions'

// import { Get_IpAddres, defaultHeader } from './Base.Action'

import { Error_Messages_Standardization } from '../../Global'
import { Database_Log_In, Database_Load_User } from './Database.Action'

export const LogIn = (UserName, Password) => async (dispatch) => {
    try {
        if (!UserName || !Password) {
            const ErrorResponse = Error_Messages_Standardization(400, 'Data tidak lengkap')
            throw ErrorResponse
        }
        const UserData = await Database_Log_In(UserName, Password)
        if (UserData) {
            console.log('Log ~ file: Auth.Action.js ~ line 29 ~ LogIn ~ UserData', UserData)
            dispatch({
                type: AUTH_LOGIN_SUCCESS,
                payload: UserData
            })
            dispatch({
                type: AUTH_RELOADE_PAGE
            })
        } else {
            const ErrorResponse = Error_Messages_Standardization(400, 'Data tidak lengkap')
            throw ErrorResponse
        }
    } catch (err) {
        console.log(`🚀 ~ file: Auth.Action.js ~ line 37 ~ LogIn ~ err`, err)
        return err
    }
    // dispatch({ type: AUTH_LOADING })
    // if (newIp || newPort || newWebSite) {
    //     dispatch({
    //         type: SET_NEW_IP,
    //         payload: { newIp, newPort, newWebSite }
    //     })
    // }
    // try {
    //     const IpAddres = Get_IpAddres()
    //     // console.log('Log: LogIn -> IpAddres', IpAddres)

    //     const body = JSON.stringify({ UserName, Password })
    //     const Responses = await axios.post(`${IpAddres}/api/auth/login`, body, defaultheader())
    //     // console.log('Log: LogIn -> Responses', Responses)
    //     if (Responses) {
    //         dispatch({
    //             type: LOGIN_SUCCESS,
    //             payload: Responses.data
    //         })
    //     }
    // } catch (err) {
    //     console.log('Log: LogIn -> err', err)
    //     if (err.message === 'Network Error') {
    //         dispatch(Create_Error_Messages(null, 'ada kesalahan pada jaringan yang anda coba akses, silakan isi ip adress yang benar jika di client'))
    //     } else {
    //         dispatch(
    //             Create_Error_Messages(
    //                 err.response ? (
    //                     err.response.status ? err.response.status
    //                         : null) : null,
    //                 err.response ? (
    //                     err.response.data.msg ? err.response.data.msg
    //                         : null) : 'anda tidak terhubung dengan server'
    //             ))
    //     }
    // }
    // dispatch({ type: AUTH_LOADED })
}

export const Load_User = () => async (dispatch, getState) => {
    try {
        const UserName = localStorage.getItem('ERecEtana_token') //TODO Must Use Token Letter
        // console.log(`🚀 ~ file: Auth.Action.js ~ line 82 ~ constLoad_User= ~ UserName`, UserName)
        if (!UserName) {
            const ErrorResponse = Error_Messages_Standardization(400, 'Data tidak lengkap')
            throw ErrorResponse
        }
        const UserData = await Database_Load_User(UserName)
        if (UserData) {
            dispatch({
                type: AUTH_USER_LOADED,
                payload: UserData
            })
        } else {
            const ErrorResponse = Error_Messages_Standardization(400, 'Data tidak lengkap')
            throw ErrorResponse
        }
    } catch (err) {
        console.log(`🚀 ~ file: Auth.Action.js ~ line 97 ~ constLoad_User= ~ err`, err)
        return err
    }

    // try {
    //     console.log(111)
    //     const Nik = 'P01012'
    //     const Password = "password"
    //     const body = JSON.stringify({ Nik, Password })
    //     // const Responses = await axios.post('https://apisfa.azurewebsites.net/Api/Login', body)
    //     const Responses = await axios.post('https://apisfa.azurewebsites.net/Api/Login', new URLSearchParams({
    //         Nik:Nik,
    //         Password:Password
    //     }))
    //     console.log(`🚀 ~ file: Auth.Action.js ~ line 108 ~ constLoad_User= ~ Responses`, Responses)
    // } catch (err) {
    //     console.log(`🚀 ~ file: Auth.Action.js ~ line 106 ~ constLoad_User= ~ err`, err)
    // }

    // dispatch({ type: AUTH_LOADING })
    // try {
    //     const IpAddres = await Get_IpAddres()
    //     // console.log('Log: Load_User -> IpAddres', IpAddres)

    //     const Responses = await axios.get(`${IpAddres}/api/auth/user`, tokenConfig(getState))
    //     // console.log('Log: Load_User -> Responses', Responses)
    //     if (Responses) {
    //         dispatch({
    //             type: USER_LOADED,
    //             payload: Responses.data ? Responses.data : null
    //         })
    //         dispatch({ type: AUTH_LOADED })
    //     }
    // } catch (err) {
    //     console.log('Log: Load_User -> err', err)
    //     try {
    //         if (err.message === 'Network Error') {
    //             dispatch(Create_Error_Messages(null, 'gagal mendapatkan userdetail, anda tidak terhubung dengan server'))
    //             dispatch({ type: AUTH_LOADED })
    //         } else if (err.response.status === 400) {
    //             dispatch({ type: USER_EXPIRED })
    //             dispatch({ type: AUTH_LOADED })
    //         } else {
    //             dispatch(
    //                 Create_Error_Messages(
    //                     err.response ? (
    //                         err.response.status ? err.response.status
    //                             : null) : null,
    //                     err.response ? (
    //                         err.response.data.msg ? err.response.data.msg
    //                             : null) : 'anda tidak terhubung dengan server'
    //                 ))
    //             dispatch({ type: AUTH_LOADED })
    //         }
    //     } catch (err_err) {
    //         console.log(err_err.response)
    //         dispatch({ type: AUTH_LOADED })
    //     }
    // }
}

export const LogOut = () => (dispatch) => {
    dispatch({
        type: AUTH_LOGOUT_SUCCESS,
    })
}
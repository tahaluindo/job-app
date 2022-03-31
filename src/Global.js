export const isDev = () => {
    if (process.env.NODE_ENV !== "production") {
        return true
    } else {
        return false
    }
}

export const isAuth = () => {
    const Token = localStorage.getItem('ERecEtana_token')
    const isAuth = localStorage.getItem('ERecEtana_isAuth')
    if (Token && isAuth) {
        return true
    } else {
        return false
    }
}

export const Error_Messages_Standardization = (ErrorCode, MSG) => {
    const ErrorResponse = {
        response: {
            status: ErrorCode ? ErrorCode : 400,
            data: {
                msg: MSG ? MSG : ''
            }
        }
    }
    return ErrorResponse
}
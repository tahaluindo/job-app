import { isDev } from '../../GlobalFunction'

export const Get_IpAddres = () => {
    try {
        const IpAddress = '127.0.0.1'
        const Port = '5000'
        return `http://${IpAddress}${Port ? `:${Port}` : ''}`
    } catch (err) {
        if (isDev()) {
            console.log("🚀 ~ file: Base.Action.js ~ line 7 ~ err", err)
        }
    }
}

export const defaultHeader = () => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return config
}

export const tokenConfig = (getState) => {
    // GET TOKEN FROM STATE
    const token = getState().Auth.token

    // HEADERS
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    // if token, add header
    if (token) {
        // console.log('token', token)
        config.headers['x-auth-token'] = token
    }

    return config
}

export const tokenConfigMultipleForm = (getState) => {
    const token = getState().Auth.token
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
            // 'Content-Type':'multipart/form-data;boundary=----WebKitFormBoundaryyrV7KO0BoCBuDbTL'
        }
    }
    if (token) {
        config.headers['x-auth-token'] = `${token}`
    }
    return config
}
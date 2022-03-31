import {
    ACCOUNT_ACCOUNT_LOADED,
    ACCOUNT_BIODATA_LOADED,
    ACCOUNT_PENDIDIKAN_LOADED,
    ACCOUNT_KETERAMPILAN_LOADED,
    ACCOUNT_KELUARGA_LOADED,
    ACCOUNT_RIWAYAT_KERJA_LOADED,
    ACCOUNT_PERTANYAAN_LOADED
} from './Type.Action'

import { Error_Messages_Standardization } from '../../Global'
import { Database_Load_Account_Data, Database_Load_Biodata_Data, Database_Load_Pendidikan_Data, Database_Load_Keterampilan_Data, Database_Load_Keluarga_Data, Database_Load_Riwayat_Kerja_Data, Database_Load_Pertanyaan } from './Database.Action'

export const GetAccountData = () => async (dispatch) => {
    try {
        const Data = await Database_Load_Account_Data()
        if (Data) {
            dispatch({
                type: ACCOUNT_ACCOUNT_LOADED,
                payload: Data
            })
        } else {
            const ErrorResponse = Error_Messages_Standardization(400, 'Data tidak ditemukan')
            throw ErrorResponse
        }
    } catch (err) {
        console.log('Log ~ file: Account.Action.js ~ line 24 ~ GetAccountData ~ err', err)
        return err
    }
}
export const GetBiodataData = () => async (dispatch) => {
    try {
        const Data = await Database_Load_Biodata_Data()
        if (Data) {
            dispatch({
                type: ACCOUNT_BIODATA_LOADED,
                payload: Data
            })
        } else {
            const ErrorResponse = Error_Messages_Standardization(400, 'Data tidak ditemukan')
            throw ErrorResponse
        }
    } catch (err) {
        console.log('Log ~ file: Account.Action.js ~ line 41 ~ GetBiodataData ~ err', err)
        return err
    }
}
export const GetPendidikanData = () => async (dispatch) => {
    try {
        const Data = await Database_Load_Pendidikan_Data()
        if (Data) {
            dispatch({
                type: ACCOUNT_PENDIDIKAN_LOADED,
                payload: Data
            })
        } else {
            const ErrorResponse = Error_Messages_Standardization(400, 'Data tidak ditemukan')
            throw ErrorResponse
        }
    } catch (err) {
        console.log('Log ~ file: Account.Action.js ~ line 58 ~ GetPendidikanData ~ err', err)
        return err
    }
}

export const GetKeterampilanData = () => async (dispatch) => {
    try {
        const Data = await Database_Load_Keterampilan_Data()
        if (Data) {
            dispatch({
                type: ACCOUNT_KETERAMPILAN_LOADED,
                payload: Data
            })
        } else {
            const ErrorResponse = Error_Messages_Standardization(400, 'Data tidak ditemukan')
            throw ErrorResponse
        }
    } catch (err) {
        console.log('Log ~ file: Account.Action.js ~ line 76 ~ GetKeterampilanData ~ err', err)
        return err
    }
}

export const GetKeluargaData = () => async (dispatch) => {
    try {
        const Data = await Database_Load_Keluarga_Data()
        if (Data) {
            dispatch({
                type: ACCOUNT_KELUARGA_LOADED,
                payload: Data
            })
        } else {
            const ErrorResponse = Error_Messages_Standardization(400, 'Data tidak ditemukan')
            throw ErrorResponse
        }
    } catch (err) {
        console.log('Log ~ file: Account.Action.js ~ line 94 ~ GetKeluargaData ~ err', err)
        return err
    }
}

export const GetRiwayatKerjaData = () => async (dispatch) => {
    try {
        const Data = await Database_Load_Riwayat_Kerja_Data()
        if (Data) {
            dispatch({
                type: ACCOUNT_RIWAYAT_KERJA_LOADED,
                payload: Data
            })
        } else {
            const ErrorResponse = Error_Messages_Standardization(400, 'Data tidak ditemukan')
            throw ErrorResponse
        }
    } catch (err) {
        console.log('Log ~ file: Account.Action.js ~ line 112 ~ GetRiwayatKerjaData ~ err', err)
        return err
    }
}

export const GetPertanyaanData = () => async (dispatch) => {
    try {
        const Data = await Database_Load_Pertanyaan()
        if (Data) {
            dispatch({
                type: ACCOUNT_PERTANYAAN_LOADED,
                payload: Data
            })
        } else {
            const ErrorResponse = Error_Messages_Standardization(400, 'Data tidak ditemukan')
            throw ErrorResponse
        }
    } catch (err) {
        console.log('Log ~ file: Account.Action.js ~ line 132 ~ GetRiwayatKerjaData ~ err', err)
        return err
    }
}

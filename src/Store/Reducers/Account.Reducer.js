import {
    ACCOUNT_ACCOUNT_LOADED,
    ACCOUNT_BIODATA_LOADED,
    ACCOUNT_PENDIDIKAN_LOADED,
    ACCOUNT_KETERAMPILAN_LOADED,
    ACCOUNT_KELUARGA_LOADED,
    ACCOUNT_RIWAYAT_KERJA_LOADED,
    ACCOUNT_PERTANYAAN_LOADED
} from '../Actions/Type.Action'

const initialState = {
    Account: null,
    Biodata: null,
    Pendidikan: null,
    Keterampilan: null,
    Keluarga: null,
    RiwayatKerja: null,
    Pertanyaan: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ACCOUNT_ACCOUNT_LOADED:
            return {
                ...state,
                Account: action.payload
            }
        case ACCOUNT_BIODATA_LOADED:
            return {
                ...state,
                Biodata: action.payload
            }
        case ACCOUNT_PENDIDIKAN_LOADED:
            return {
                ...state,
                Pendidikan: action.payload,
            }
        case ACCOUNT_KETERAMPILAN_LOADED:
            return {
                ...state,
                Keterampilan: action.payload
            }
        case ACCOUNT_KELUARGA_LOADED:
            return {
                ...state,
                Keluarga: action.payload
            }
        case ACCOUNT_RIWAYAT_KERJA_LOADED:
            return {
                ...state,
                RiwayatKerja: action.payload
            }
        case ACCOUNT_PERTANYAAN_LOADED:
            return {
                ...state,
                Pertanyaan: action.payload
            }
        default:
            return state
    }
}
import {
    JOB_LIST_LOADED,
    JOB_DETAIL_LOADED,
    JOB_APPLY_LOADED,
    JOB_SAVE_LOADED,
} from '../Actions/Type.Action'

const initialState = {
    JobList: [],
    JobDetail: null,
    JobApply: [],
    JobSave: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case JOB_LIST_LOADED:
            return {
                ...state,
                JobList: action.payload,
            }
        case JOB_DETAIL_LOADED:
            return {
                ...state,
                JobDetail: action.payload,
            }
        case JOB_APPLY_LOADED:
            return {
                ...state,
                JobApply: action.payload,
            }
        case JOB_SAVE_LOADED:
            return {
                ...state,
                JobSave: action.payload,
            }
        default:
            return state
    }
}
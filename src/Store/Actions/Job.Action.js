import {
    JOB_LIST_LOADED,
    JOB_DETAIL_LOADED,
    JOB_APPLY_LOADED,
    JOB_SAVE_LOADED,
} from '../Actions/Type.Action'

import { Error_Messages_Standardization } from '../../Global'
import { Database_Load_Job_List, Database_Load_Job_Apply, Database_Load_Job_Save } from './Database.Action'

export const GetJobList = () => async (dispatch) => {
    try {
        const JobList = await Database_Load_Job_List()
        if (JobList) {
            dispatch({
                type: JOB_LIST_LOADED,
                payload: JobList
            })
        } else {
            const ErrorResponse = Error_Messages_Standardization(400, 'Data tidak ditemukan')
            throw ErrorResponse
        }
    } catch (err) {
        console.log('Log ~ file: Job.Action.js ~ line 24 ~ GetJobList ~ err', err)
        return err
    }
}
export const GetJobDetail = () => async (dispatch) => {
    try {
        const JobDetail = await null()
        if (JobDetail) {
            dispatch({
                type: JOB_DETAIL_LOADED,
                payload: JobDetail
            })
        } else {
            const ErrorResponse = Error_Messages_Standardization(400, 'Data tidak ditemukan')
            throw ErrorResponse
        }
    } catch (err) {
        console.log('Log ~ file: Job.Action.js ~ line 41 ~ GetJobDetail ~ err', err)
        return err
    }
}
export const GetJobApply = () => async (dispatch) => {
    try {
        const JobApply = await Database_Load_Job_Apply()
        if (JobApply) {
            dispatch({
                type: JOB_APPLY_LOADED,
                payload: JobApply
            })
        } else {
            const ErrorResponse = Error_Messages_Standardization(400, 'Data tidak ditemukan')
            throw ErrorResponse
        }
    } catch (err) {
        console.log('Log ~ file: Job.Action.js ~ line 58 ~ GetJobApply ~ err', err)
        return err
    }
}
export const GetJobSave = () => async (dispatch) => {
    try {
        const JobSave = await Database_Load_Job_Save()
        if (JobSave) {
            dispatch({
                type: JOB_SAVE_LOADED,
                payload: JobSave
            })
        } else {
            const ErrorResponse = Error_Messages_Standardization(400, 'Data tidak ditemukan')
            throw ErrorResponse
        }
    } catch (err) {
        console.log('Log ~ file: Job.Action.js ~ line 75 ~ GetJobSave ~ err', err)
        return err
    }
}
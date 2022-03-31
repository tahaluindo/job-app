import { combineReducers } from 'redux'

import Auth from './Auth.Reducer'
import Account from './Account.Reducer'
import Job from './Job.Reducer'

const RootReducer = combineReducers({
    Auth,
    Account,
    Job
})

export default RootReducer
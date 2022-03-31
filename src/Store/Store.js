import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'

import { isDev } from '../Global'

import RootReducer from './Reducers/Root.Reducer'

const initialState = {}
const middleware = [thunk]

// const Store = createStore(RootReducer, initialState, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f))
const Store = createStore(RootReducer, initialState, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ ? isDev() && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f))

export default Store
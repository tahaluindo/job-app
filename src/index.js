import React from 'react'

import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

// import reportWebVitals from './reportWebVitals'

import './index.css'

import App from './App'
import Store from './Store/Store'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

const app = (
  <Provider store={Store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals()
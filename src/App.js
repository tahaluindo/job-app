import React, { Fragment } from "react"

import { connect } from 'react-redux'

import { BrowserRouter as Router } from "react-router-dom"
import BaseRouter from "./Router"

import { Load_User } from './Store/Actions/Auth.Action'

// import Header from './Components/Containers/MocHeader'
import Header from './Components/Containers/Header'
// import Footer from './Components/Containers/MocFooter'
import Footer from './Components/Containers/Footer'

class App extends React.Component {
  componentDidMount() {
    const Token = this.props.Token
    const isAuth = this.props.isAuth
    const User = this.props.User
    if ((Token || isAuth) && (User === null)) {
      this.props.Load_User()
    }
    // window.addEventListener("resize", this.CheckWindowWidth.bind(this))
    // this.CheckWindowWidth()
  }
  render() {
    const URLLocation = window.location.href
    // const LoginLocation = '/login'
    const LoginLocation = false
    const isAuth = this.props.isAuth
    const User = this.props.User
    return (
      <Fragment>
        <Router>
          {URLLocation.includes(LoginLocation) ?
            <div></div> :
            <Header
              isAuth={isAuth}
              UserName={User?.UserName ? User.UserName : 'User404'}
              Role={User?.Role ? User.Role : []}
            />}
          <BaseRouter />
          <Footer />
        </Router>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  Token: state.Auth.Token,
  isAuth: state.Auth.isAuth,
  User: state.Auth.User,
})

export default connect(mapStateToProps, { Load_User })(App)
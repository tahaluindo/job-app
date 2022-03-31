import React from 'react'

import { connect } from 'react-redux'
import { LogIn } from '../../../Store/Actions/Auth.Action'

import { Navigate } from 'react-router-dom'

import { Grid, Paper, TextField, Button, } from '@mui/material'

import Logo from '../../../Img/Etana_logo.png'

class Login extends React.Component {
    state = {
        Email: '',
        Password: '',
        isShowPassword: false,
        isGoToCreateUser: false,
        isGoToForgetPassword: false
    }
    onShowPassword = () => {
        this.setState({ isShowPassword: !this.state.isShowPassword })
    }
    goToCreateUser = () => {
        this.setState({ isGoToCreateUser: !this.state.isGoToCreateUser })
    }
    goToForgetPassword = () => {
        this.setState({ isGoToForgetPassword: !this.state.isGoToForgetPassword })
    }
    onChangeField = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    formOnSubmit = (e) => {
        e.preventDefault()
        this.props.LogIn(this.state.Email, this.state.Password)
    }
    render() {
        if (this.props.isAuth && this.props.Token) {
            return <Navigate to="/" replace={true} />
        }
        const {
            Email,
            Password,
            // isShowPassword,
            isGoToCreateUser,
            isGoToForgetPassword
        } = this.state
        return (
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {isGoToCreateUser ? <Navigate to="/createaccount" replace={true} /> : <div></div>}
                {isGoToForgetPassword ? <Navigate to="/forgetpassword" replace={true} /> : <div></div>}
                <Paper
                    style={{ width: '60%', margin: '2% 0 2% 0', border: '0px solid red' }}
                >
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >

                        <img
                            src={Logo}
                            style={{ height: '30%', width: '30%', padding: '1% 1% 1% 1%', margin: '2% 0 2% 0', border: '0px solid red' }}
                            alt="Logo"
                        />
                    </Grid>
                    <form
                        onSubmit={this.formOnSubmit}
                    >
                        <div
                            style={{ margin: '0 5% 0 5%' }}
                        >
                            <label>
                                User Name
                            </label><br />
                            <TextField
                                type='text'
                                name='Email'
                                value={Email}
                                onChange={this.onChangeField}
                                style={{ width: '100%', margin: '1% 0 1% 0' }}
                            /><br />
                            <label>
                                Password
                            </label><br />
                            <TextField
                                type='password'
                                name='Password'
                                value={Password}
                                onChange={this.onChangeField}
                                style={{ width: '100%', margin: '1% 0 1% 0' }}
                            /><br />
                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="flex-start"
                            >
                                <label
                                    style={{ color: '#58a6ff', cursor: 'pointer' }}
                                    onClick={this.goToForgetPassword}
                                >
                                    Forgot password?
                                </label><br />
                            </Grid>
                        </div>
                        <center>
                            <Button
                                variant='contained'
                                size='large'
                                style={{ border: '0px solid red', width: "85%", margin: '3% 0 2% 0' }}
                                type='submit'
                            >
                                Sign In
                            </Button>
                        </center>
                    </form>
                </Paper>
                <Paper
                    style={{ width: '60%', margin: '2% 0 2% 0', border: '0px solid red' }}
                >
                    <div
                        style={{ margin: '0 5% 0 5%', alignItems: 'center', textAlign: 'center' }}
                    >
                        <p>
                            New Here? <span
                                style={{ color: '#58a6ff', cursor: 'pointer' }}
                                onClick={this.goToCreateUser}
                            >
                                Create an account
                            </span>
                        </p>
                    </div>
                </Paper>
            </Grid >
        )
    }
}

const mapStateToProps = state => ({
    isAuth: state.Auth.isAuth,
    Token: state.Auth.Token,
})

export default connect(mapStateToProps, { LogIn })(Login)
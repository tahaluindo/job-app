import React from 'react'

import { connect } from 'react-redux'
// import { LogIn } from '../../../Store/Actions/Auth.Action'

import { Navigate } from 'react-router-dom'

import { Grid, Paper, TextField, Button, } from '@mui/material'

import Logo from '../../../Img/Etana_logo.png'

class CreateAccount extends React.Component {
    state = {
        Email: '',
        UserName: '',
        Password: '',
        Password1: '',
        isShowPassword: false,
        isShowPassword1: false,
        isGoToLogin: false,
    }
    onShowPassword = () => {
        this.setState({ isShowPassword: !this.state.isShowPassword })
    }
    onShowPassword1 = () => {
        this.setState({ isShowPassword1: !this.state.isShowPassword1 })
    }
    goToLogin = () => {
        this.setState({ isGoToLogin: !this.state.isGoToLogin })
    }
    onChangeField = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    formOnSubmit = (e) => {
        e.preventDefault()
        // this.props.LogIn(this.state.Email, this.state.Password)
    }
    render() {
        if (this.props.isAuth && this.props.Token) {
            return <Navigate to="/" replace={true} />
        }
        const {
            Email,
            UserName,
            Password,
            Password1,
            // isShowPassword,
            // isShowPassword1,
            isGoToLogin,
        } = this.state
        return (
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {isGoToLogin ? <Navigate to="/login" replace={true} /> : <div></div>}
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
                                Email
                            </label><br />
                            <TextField
                                type='email'
                                name='Email'
                                value={Email}
                                onChange={this.onChangeField}
                                style={{ width: '100%', margin: '1% 0 1% 0' }}
                            /><br />
                            <label>
                                User Name
                            </label><br />
                            <TextField
                                type='text'
                                name='UserName'
                                value={UserName}
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
                            <label>
                                Confirm a Password
                            </label><br />
                            <TextField
                                type='password'
                                name='Password1'
                                value={Password1}
                                onChange={this.onChangeField}
                                style={{ width: '100%', margin: '1% 0 1% 0' }}
                            /><br />
                        </div>
                        <center>
                            <Button
                                variant='contained'
                                size='large'
                                style={{ border: '0px solid red', width: "85%", margin: '3% 0 2% 0' }}
                                type='submit'
                            >
                                Create an account
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
                            Already have an account? <span
                                style={{ color: '#58a6ff', cursor: 'pointer' }}
                                onClick={this.goToLogin}
                            >
                                Sign in
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

// export default connect(mapStateToProps, { LogIn })(CreateAccount)
export default connect(mapStateToProps, {})(CreateAccount)
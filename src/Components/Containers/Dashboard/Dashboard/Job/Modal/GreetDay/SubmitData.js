import React from 'react'

import { TextField, Button } from '@mui/material'

class SubmitData extends React.Component {
    state = {
        UserName: '',
        Password: '',
    }
    onChangeField = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const {
            UserName,
            Password,
        } = this.state
        const st_textfield = { marginTop: '10px', marginBottom: '10px', width: '100%' }
        return (
            <div>
                <TextField
                    style={st_textfield}
                    variant='outlined'
                    onChange={this.onChangeField}
                    type='text'
                    label='UserName'
                    name='UserName'
                    value={UserName}
                /><br />
                <TextField
                    style={st_textfield}
                    variant='outlined'
                    onChange={this.onChangeField}
                    type='text'
                    label='Password'
                    name='Password'
                    value={Password}
                /><br />
                <center>
                    <Button
                        variant='contained'
                        style={{ width: '60%', margin: '3% 0 5% 0' }}
                    >
                        Submit
                    </Button>
                </center>
            </div>
        )
    }
}

export default SubmitData
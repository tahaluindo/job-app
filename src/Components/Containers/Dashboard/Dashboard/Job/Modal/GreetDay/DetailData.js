import React from 'react'

import { TextField } from '@mui/material'

class DetailData extends React.Component {
    state = {
        UserName: 'Contoh',
        Password: 'Contoh',
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
                    disabled
                /><br />
                <TextField
                    style={{ ...st_textfield, margin: '0 0 5% 0' }}
                    variant='outlined'
                    onChange={this.onChangeField}
                    type='text'
                    label='Password'
                    name='Password'
                    value={Password}
                    disabled
                /><br />
            </div>
        )
    }
}

export default DetailData
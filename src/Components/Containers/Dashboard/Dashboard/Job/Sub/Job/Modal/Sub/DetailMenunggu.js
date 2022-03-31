import React from "react"

import { TextField, FormControl, InputLabel, Select, Button } from '@mui/material'

import Profile from '../../../../../../../../Layouts/Account/Profile'

class DetailMenunggu extends React.Component {
    state = {
        Jenis: 'Menunggu',
        Keterangan: ''
    }
    onChangeField = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const st_textfield_non = { marginTop: '10px', marginBottom: '10px', width: '100%' }
        const {
            Jenis,
            Keterangan,
        } = this.state
        return (
            <div>
                <Profile DisableEdit={true} />
                <h2>
                    Action:
                </h2>
                <FormControl style={st_textfield_non} variant="filled" required >
                    <InputLabel shrink >Jenis</InputLabel>
                    <Select native onChange={(e) => this.onChangeField(e)} label="Jenis" name='Jenis' value={Jenis} labelWidth={100} >
                        <option value="" disabled> -- select an option -- </option>
                        {['Menunggu', 'Diterima', 'Ditolak'].map((option, index) =>
                            <option key={index} value={option}>{option}</option>
                        )}
                    </Select>
                </FormControl>
                <TextField
                    style={st_textfield_non}
                    variant='outlined'
                    InputProps={{ required: true }}
                    type='text'
                    label='Keterangan'
                    name='Keterangan'
                    value={Keterangan}
                    onChange={this.onChangeField}
                />
                <center>
                    <Button
                        variant='contained'
                        style={{ width: '80%', margin: '1% 0 4% 0' }}
                    >
                        Submit
                    </Button>
                </center>
            </div>
        )
    }
}
export default DetailMenunggu
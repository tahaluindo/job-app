import React from 'react'

import { FormControl, InputLabel, Select, TextField, Button } from '@mui/material'

class SubmitKontrak extends React.Component {
    state = {
        Profilepicture: null,
        NominalDiminta:'20000000',
        Jenis: 'Menunggu',
        Keterangan: ''
    }
    onChangeField = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    File_OnChange = E => {
        this.setState({ [E.target.name]: E.target.files[0] })
    }
    render() {
        const st_textfield_non = { marginTop: '10px', marginBottom: '10px', width: '100%' }
        const {
            NominalDiminta,
            Jenis,
            Keterangan,
        } = this.state
        return (
            <div>
                <label>Offering</label><br />
                <center>
                    <h2
                        style={{ margin: '0 0 0 0', padding: '1%', color: 'black', border: '1px solid blue' }}
                    >
                        Status: Menunggu Konfirmasi
                    </h2>
                </center>
                <h3>Diajukan Pada Tanggal: 19/12/2022</h3>
                <center>
                    <img
                        src={null}
                        alt='foto Offering'
                        style={{ border: '1px solid black', width: '80%', height: 'auto', margin: '2% 0 5% 0' }}
                    /><br />
                </center>
                <TextField
                    style={st_textfield_non}
                    variant='outlined'
                    InputProps={{ required: true }}
                    type='text'
                    label='Jumlah Nominal Diminta (Rp)'
                    name='NominalDiminta'
                    value={NominalDiminta}
                    onChange={this.onChangeField}
                    disabled
                />
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
                        style={{ margin: '10% 0 5% 0', width: '60%' }}
                    >
                        Submit
                    </Button>
                </center>
            </div>
        )
    }
}

export default SubmitKontrak
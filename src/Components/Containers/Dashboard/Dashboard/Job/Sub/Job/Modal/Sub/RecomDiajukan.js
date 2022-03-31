import React from "react"

import { FormControl, InputLabel, Select, TextField, Button } from '@mui/material'

import Profile from '../../../../../../../../Layouts/Account/Profile'

class RecomDiajukan extends React.Component {
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
            <div
                style={{ margin: '0 0 5% 0' }}
            >
                <div
                    style={{ margin: '0 0 3% 0', borderBottom: '1px solid black' }}
                >
                    <h2
                        style={{ borderBottom: '1px solid black' }}
                    >
                        Status Pengurusan
                    </h2>
                    <h3>
                        HR:
                    </h3>
                    <center>
                        <h2
                            style={{ margin: '0 0 0 0', padding: '1%', color: 'green', border: '1px solid blue' }}
                        >
                            Status: Diajukan
                        </h2>
                    </center>
                    <p>Oleh: Andi</p>
                    <p>Tanggal: 19/8/2022</p>
                    <p>Keterangan: CV Menarik</p>
                    <h3>
                        Departemen:
                    </h3>
                    <center>
                        <h2
                            style={{ margin: '0 0 0 0', padding: '1%', color: 'Black', border: '1px solid Orange' }}
                        >
                            Status: Menunggu
                        </h2>
                    </center>
                    <p>Oleh:</p>
                    <p>Tanggal:</p>
                    <p>Keterangan:</p>
                </div>
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
export default RecomDiajukan
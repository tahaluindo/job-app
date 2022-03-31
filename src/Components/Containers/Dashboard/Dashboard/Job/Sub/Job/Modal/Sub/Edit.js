import React from 'react'

import { TextField, FormControl, InputLabel, Select, Button } from '@mui/material'

import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'

class Edit extends React.Component {
    state = {
        Judul: '',
        Departemen: '',
        Tingkat: '',
        Lokasi: '',
        About: '',
        Deskripsi: '',
        Deskripsi1: '',
        Persyaratan: '',
        Persyaratan1: '',
    }
    onChangeField = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    SelectFormOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const {
            Judul,
            Departemen,
            Tingkat,
            Lokasi,
            About,
            Deskripsi,
            Deskripsi1,
            Persyaratan,
            Persyaratan1
        } = this.state
        const st_textfield = { width: '100%', margin: '1% 0 1% 0' }
        const st_divaddtextfield = { display: 'flex', alignItems: 'center' }
        const st_addtextfield = { width: '95%', margin: '1% 0 1% 0' }
        const st_icon = { color: 'grey', fontSize: '180%', margin: '0 0 0 1%' }
        return (
            <div>
                <label>
                    Judul
                </label><br />
                <TextField
                    type='text'
                    name='Judul'
                    value={Judul}
                    onChange={this.onChangeField}
                    style={st_textfield}
                /><br />
                <FormControl style={st_textfield} variant="filled" required >
                    <InputLabel shrink >Departemen </InputLabel>
                    <Select native onChange={(e) => this.SelectFormOnChange(e)} label="Departemen" name='Departemen' value={Departemen} labelWidth={100} >
                        <option value="" disabled> -- select an option -- </option>
                        {['IT', 'HRGA', 'Finance'].map((option, index) =>
                            <option key={index} value={option}>{option}</option>
                        )}
                    </Select>
                </FormControl>
                <FormControl style={st_textfield} variant="filled" required >
                    <InputLabel shrink >Tingkat</InputLabel>
                    <Select native onChange={(e) => this.SelectFormOnChange(e)} label="Tingkat" name='Tingkat' value={Tingkat} labelWidth={100} >
                        <option value="" disabled> -- select an option -- </option>
                        {['Junior', 'Senior', 'Head'].map((option, index) =>
                            <option key={index} value={option}>{option}</option>
                        )}
                    </Select>
                </FormControl>
                <FormControl style={st_textfield} variant="filled" required >
                    <InputLabel shrink >Lokasi</InputLabel>
                    <Select native onChange={(e) => this.SelectFormOnChange(e)} label="Lokasi" name='Lokasi' value={Lokasi} labelWidth={100} >
                        <option value="" disabled> -- select an option -- </option>
                        {['Indonesia', 'Jerman'].map((option, index) =>
                            <option key={index} value={option}>{option}</option>
                        )}
                    </Select>
                </FormControl>
                <label>
                    About
                </label><br />
                <TextField
                    type='text'
                    name='About'
                    value={About}
                    onChange={this.onChangeField}
                    style={st_textfield}
                /><br />
                <h2>
                    Deskripsi Pekerjaan:
                </h2>
                <div
                    style={st_divaddtextfield}
                >
                    <TextField
                        type='text'
                        name='Deskripsi'
                        value={Deskripsi}
                        onChange={this.onChangeField}
                        style={st_addtextfield}
                    />
                    <DeleteOutlineRoundedIcon
                        style={st_icon}
                    />
                    <AddCircleRoundedIcon
                        style={st_icon}
                    />
                </div>
                <br />
                <div
                    style={st_divaddtextfield}
                >
                    <TextField
                        type='text'
                        name='Deskripsi1'
                        value={Deskripsi1}
                        onChange={this.onChangeField}
                        style={st_addtextfield}
                    />
                    <DeleteOutlineRoundedIcon
                        style={st_icon}
                    />
                    <AddCircleRoundedIcon
                        style={st_icon}
                    />
                </div>
                <br />
                <h2>
                    Persyaratan:
                </h2>
                <div
                    style={st_divaddtextfield}
                >
                    <TextField
                        type='text'
                        name='Persyaratan'
                        value={Persyaratan}
                        onChange={this.onChangeField}
                        style={st_addtextfield}
                    />
                    <DeleteOutlineRoundedIcon
                        style={st_icon}
                    />
                    <AddCircleRoundedIcon
                        style={st_icon}
                    />
                </div>
                <br />
                <div
                    style={st_divaddtextfield}
                >
                    <TextField
                        type='text'
                        name='Persyaratan1'
                        value={Persyaratan1}
                        onChange={this.onChangeField}
                        style={st_addtextfield}
                    />
                    <DeleteOutlineRoundedIcon
                        style={st_icon}
                    />
                    <AddCircleRoundedIcon
                        style={st_icon}
                    />
                </div>
                <br />
                <center>
                    <Button
                        variant='contained'
                        style={{ width: '60%', margin: '2% 0 5% 0' }}
                    >
                        Save
                    </Button>
                </center>
            </div>
        )
    }
}

export default Edit
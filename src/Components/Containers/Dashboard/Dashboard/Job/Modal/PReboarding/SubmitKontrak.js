import React from 'react'

import { Tabs, Tab, TextField, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material'

import Overview from './Sub/Overview'
import PreviewBPJS from './Sub/PreviewBPJS'

class SubmitKontrak extends React.Component {
    state = {
        TabValue: 0,
        isDone: false,
        Keterangan: '',
    }
    onChangeField = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    OnChangeCheckbox = E => {
        this.setState({ [E.target.name]: !this.state[E.target.name] })
    }
    handleTabChange = (e, newTabValue) => {
        this.setState({ TabValue: newTabValue })
    }
    render() {
        const st_textfield_non = { marginTop: '10px', marginBottom: '10px', width: '100%' }
        const TabData = [
            { TabLabel: 'Overview', TabPanel: <Overview /> },
            { TabLabel: 'Preview BPJS', TabPanel: <PreviewBPJS /> },
        ]
        const {
            isDone,
            Keterangan,
            TabValue,
        } = this.state
        return (
            <div>
                <div>
                    <h4>Nama: Anton</h4>
                    <h4>Posisi: Manager</h4>
                    <h4>Tanggal Join: 19/02/2022</h4>
                </div>
                <Tabs
                    value={TabValue}
                    onChange={this.handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant={TabData.length > 6 ? "scrollable" : null}
                    scrollButtons="auto"
                // centered={TabData.length > 6 ? false : true}
                >
                    {TabData.map((item, index) => (
                        <Tab key={`Tabs${index}`} label={item.TabLabel} />
                    ))}
                </Tabs>
                <div
                    style={{ margin: '1% 0 1% 0' }}
                >
                    {TabValue === 0 ? TabData[TabValue].TabPanel : null}
                    {TabValue === 1 ? TabData[TabValue].TabPanel : null}
                </div>
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
                <FormGroup row>
                    <FormControlLabel
                        control={<Checkbox color='primary' onChange={this.OnChangeCheckbox} name="isDone" value={isDone} />}
                        label="Semua Keperluan Lengkap"
                    />
                </FormGroup>
                <center>
                    <Button
                        variant='contained'
                        size='large'
                        style={{ margin: '1% 0 5% 0', width: '60%' }}
                    >
                        Done
                    </Button>
                </center>
            </div>
        )
    }
}

export default SubmitKontrak
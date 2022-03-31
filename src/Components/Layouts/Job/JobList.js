import React, { Fragment } from "react"

import { connect } from 'react-redux'
import { GetJobList } from '../../../Store/Actions/Job.Action'

import { List, ListItemButton, Divider, Grid, Paper, FormGroup, FormControlLabel, Checkbox, Collapse, Button } from '@mui/material'

import { Navigate } from 'react-router-dom'

import WorkIcon from '@mui/icons-material/Work'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import LocationOnIcon from '@mui/icons-material/LocationOn'

import SearchJob from '../../Containers/Job/SearchJob'
import Banner from '../../../Img/Daftar-Perusahaan-BUMN.jpg'

class JobList extends React.Component {
    componentDidMount() {
        this.props.GetJobList()
    }
    state = {
        isGoToJobDetail: false
    }
    goToSaveJob = () => {
        // window.location.href = '/JobDetail'
        this.setState({ isGoToJobDetail: true })
    }
    render() {
        const DataCareers = this.props.JobListData
        const Departemen = []
        const Tingkat = []
        const Lokasi = []
        const Query = [
            {
                Nama: 'Departemen',
                Data: Departemen
            },
            {
                Nama: 'Tingkat',
                Data: Tingkat
            },
            {
                Nama: 'Lokasi',
                Data: Lokasi
            }
        ]
        let i = 0
        let isOpen = true
        // console.log()
        while (i < DataCareers.length) {
            if (!Departemen.includes(DataCareers[i].Departemen)) {
                Departemen.push(DataCareers[i].Departemen)
            }
            if (!Tingkat.includes(DataCareers[i].Tingkat)) {
                Tingkat.push(DataCareers[i].Tingkat)
            }
            if (!Lokasi.includes(DataCareers[i].Lokasi)) {
                Lokasi.push(DataCareers[i].Lokasi)
            }
            i = i + 1
        }
        const handleClick = () => {
            console.log('hi')
        }
        const DetailStyle = { border: '0px solid red', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '30%' }
        const DetailLogoStyle = { marginRight: '2%' }
        const {
            isGoToJobDetail
        } = this.state
        return (
            <div>
                {isGoToJobDetail ? <Navigate to="/JobDetail" replace={true} /> : <div></div>}
                <center>
                    <img
                        src={Banner}
                        style={{ width: '98vw', height: '45vh' }}
                        alt="foto memotifasi"
                    />
                </center>
                <SearchJob />

                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                >
                    <Paper
                        style={{ border: '0px solid red', width: '20vw', margin: '0 0 0 2vw', padding: '2% 1% 0 1%', boxShadow: 'none' }}
                    >
                        {Query.map((item, index) =>
                            <List
                                key={index}
                            >
                                <p
                                    style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '150%', border: '0px solid red' }}
                                    onClick={handleClick}
                                >
                                    {item.Nama}
                                </p>
                                <Collapse in={isOpen} >
                                    {item.Data.map((itemitem, indexindex) =>
                                        <div
                                            key={`${index}-${indexindex}`}
                                        >
                                            <FormGroup>
                                                <FormControlLabel style={{ padding: '0px 0px 0px 2%' }} control={<Checkbox defaultChecked />} label={itemitem} />
                                            </FormGroup>
                                        </div>
                                    )}
                                </Collapse>
                            </List>
                        )}
                    </Paper>
                    <Paper
                        style={{ border: '0px solid red', width: '60vw', padding: '2% 1% 0 1%', margin: '0 5vw 0 0', boxShadow: 'none' }}
                    >
                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <h1
                                style={{ fontWeight: 'bold', fontSize: '200%' }}
                            >
                                Posisi Tersedia
                            </h1>

                            <List
                                style={{ margin: '0% 0 5% 0' }}
                            >
                                <Divider />
                                {DataCareers.length > 0 ? DataCareers.map((item, index) => (
                                    <Fragment
                                        key={index}
                                    >
                                        <ListItemButton>
                                            <Grid
                                                container
                                                direction="column"
                                                justifyContent="flex-start"
                                                alignItems="stretch"
                                                style={{ border: '0px solid blue' }}
                                            >
                                                <h2
                                                    style={{ border: '0px solid red' }}
                                                >
                                                    {item.Title}
                                                </h2>
                                                {/* {JSON.stringify(item)} */}
                                                <Grid
                                                    container
                                                    direction="row"
                                                    justifyContent="center"
                                                    alignItems="flex-start"
                                                    style={{ border: '0px solid red' }}
                                                >
                                                    <div
                                                        style={DetailStyle}
                                                    >
                                                        <WorkIcon
                                                            style={DetailLogoStyle}
                                                        />
                                                        {item.Departemen}
                                                    </div>
                                                    <div
                                                        style={DetailStyle}
                                                    >
                                                        <SignalCellularAltIcon
                                                            style={DetailLogoStyle}
                                                        />
                                                        {item.Tingkat}
                                                    </div>
                                                    <div
                                                        style={DetailStyle}
                                                    >
                                                        <LocationOnIcon
                                                            style={DetailLogoStyle}
                                                        />
                                                        {item.Lokasi}
                                                    </div>
                                                </Grid>
                                                <div
                                                    style={{ margin: '2% 0 1% 0', width: '95%' }}
                                                >
                                                    <center>
                                                        <Divider />
                                                        <Button
                                                            // variant="outlined"
                                                            variant="contained"
                                                            style={{ margin: '2% 0 1% 0', width: '60%', borderRadius: '10px' }}
                                                            onClick={this.goToSaveJob}
                                                        >
                                                            See Detail
                                                        </Button>
                                                    </center>
                                                </div>
                                            </Grid>
                                        </ListItemButton>
                                        <Divider />
                                    </Fragment>
                                ))
                                    : <h1>kesalahan data</h1>
                                }
                            </List>
                        </Grid>
                    </Paper>
                </Grid >


            </div >
        )
    }
}

const mapStateToProps = state => ({
    JobListData: state.Job.JobList,
})

export default connect(mapStateToProps, { GetJobList })(JobList)
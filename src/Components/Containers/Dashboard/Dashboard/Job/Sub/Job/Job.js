import React, { Fragment } from 'react'

import { List, ListItemButton, Grid, Divider } from '@mui/material'

import WorkIcon from '@mui/icons-material/Work'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import LocationOnIcon from '@mui/icons-material/LocationOn'

import GenericModals from '../../../../../GenericModals'

import JobEdit from './Modal/JobEdit'
import JobView from './Modal/JobView'

const Job = () => {
    const Data = [
        {
            No: '123456789',
            Status: 'Aktif',
            Title: "Operations - Shopee Express, Hub Lead (Batang)",
            Departemen: "Operations",
            Tingkat: "Manager",
            Lokasi: "Indonesia - Yogyakarta"
        },
        {
            No: '123456789',
            Status: 'Waiting',
            Title: "Shopee Express - Budgeting and Planning, Financial Planning and Analysis (FP&A)",
            Departemen: "Legal and Finance",
            Tingkat: "Experienced",
            Lokasi: "Indonesia - Jakarta"
        },
        {
            No: '123456789',
            Status: 'Off',
            Title: "Legal and Finance - Accounting (Logistic)",
            Departemen: "Legal and Finance",
            Tingkat: "Experienced",
            Lokasi: "Indonesia - Jakarta"
        }
    ]
    const DetailStyle = { border: '0px solid red', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '30%' }
    const DetailLogoStyle = { marginRight: '2%' }
    return (
        <Fragment>
            <h2
                style={{ borderBottom: '1px solid black' }}
            >
                Jobs
            </h2>
            <List
                style={{ margin: '1%' }}
            >
                {Data.map((item, index) =>
                    <Fragment
                        key={index}
                    >
                        <ListItemButton>
                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                            >
                                <div
                                    style={{ border: '0px solid red', width: '70%', padding: '0 0 0 1%' }}
                                >
                                    <Grid
                                        container
                                        direction="column"
                                        justifyContent="flex-start"
                                        alignItems="stretch"
                                        style={{ border: '0px solid blue', padding: '0 0 3% 0' }}
                                    >
                                        <b>
                                            No: {item.No}
                                            <span
                                                style={{ margin: '0 0 0 30px', color: item.Status === 'Aktif' ? 'green' : item.Status === 'Waiting' ? 'orange' : 'black' }}
                                            >
                                                Status: {item.Status}
                                            </span>
                                        </b>
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
                                    </Grid>
                                </div>
                                <div
                                    style={{ border: '0px solid red', width: '10%' }}
                                >
                                    <center>
                                        <GenericModals
                                            size='xl'
                                            header='Job Edit'
                                            body={<JobEdit />}
                                            Buttoncolor='primary'
                                            ButtononClickeven={() => null}
                                            Buttonlabel={'Edit'}
                                        />
                                    </center>
                                </div>
                                <div
                                    style={{ border: '0px solid red', width: '10%' }}
                                >
                                    <center>
                                    <GenericModals
                                            size='xl'
                                            header='Job View'
                                            body={<JobView />}
                                            Buttoncolor='primary'
                                            ButtononClickeven={() => null}
                                            Buttonlabel={'View'}
                                        />
                                    </center>
                                </div>
                            </Grid>
                        </ListItemButton>
                        <Divider />
                    </Fragment>
                )}
            </List>
        </Fragment>
    )
}

export default Job
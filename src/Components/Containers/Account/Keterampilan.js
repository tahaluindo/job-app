import React, { Fragment } from 'react'

import { Grid, Button, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'

const Keterampilan = ({ Data, DisableEdit }) => {
    const DataKeterampilanBahasa = Data[0].Bahasa
    const DataKeterampilanKomputer = Data[0].Komputer
    const DataKeterampilanRelevan = Data[0].Relevan
    return (
        <Fragment>
            <div
                style={{ margin: '5% 0 5% 0' }}
            >
                {/* {JSON.stringify(Data[0])} */}
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    style={{ border: '0px solid red' }}
                >
                    <h2
                        style={{ width: '30vw' }}
                    >
                        Keterampilan Bahasa
                    </h2>
                    {!DisableEdit ?
                        <Button
                            variant='outlined'
                            size='large'
                            style={{ marginLeft: '50%', width: '10vw' }}
                        >
                            Edit
                        </Button> :
                        <div></div>}
                </Grid>
                <Table stickyHeader id='Tabel_Account_Pendidikan'>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: '5%' }} align="center">No</TableCell>
                            <TableCell style={{ width: '15%' }} align="center">Bahasa</TableCell>
                            <TableCell style={{ width: '30%' }} align="center">Tingkat Penguasaan (Sangat Baik/Baik/Cukup/Kurang)</TableCell>
                            <TableCell style={{ width: '50%' }} align="center">Catatan</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {DataKeterampilanBahasa.map((item, index) => (
                            <TableRow hover key={index + 1}>
                                <TableCell align="left">{index + 1}</TableCell>
                                <TableCell align="left">{item.Bahasa}</TableCell>
                                <TableCell align="left">{item.Penguasaan}</TableCell>
                                <TableCell align="left">{item.Catatan}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div >
            <div
                style={{ margin: '5% 0 5% 0' }}
            >
                {/* {JSON.stringify(Data[0])} */}
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    style={{ border: '0px solid red' }}
                >
                    <h2
                        style={{ width: '30vw' }}
                    >
                        Keterampilan Komputer
                    </h2>
                    {!DisableEdit ?
                        <Button
                            variant='outlined'
                            size='large'
                            style={{ marginLeft: '50%', width: '10vw' }}
                        >
                            Edit
                        </Button> :
                        <div></div>}
                </Grid>
                <Table stickyHeader id='Tabel_Account_Pendidikan'>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: '5%' }} align="center">No</TableCell>
                            <TableCell style={{ width: '15%' }} align="center">Komputer</TableCell>
                            <TableCell style={{ width: '30%' }} align="center">Tingkat Penguasaan (Sangat Baik/Baik/Cukup/Kurang)</TableCell>
                            <TableCell style={{ width: '50%' }} align="center">Catatan</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {DataKeterampilanKomputer.map((item, index) => (
                            <TableRow hover key={index + 1}>
                                <TableCell align="left">{index + 1}</TableCell>
                                <TableCell align="left">{item.Komputer}</TableCell>
                                <TableCell align="left">{item.Penguasaan}</TableCell>
                                <TableCell align="left">{item.Catatan}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div >
            <div
                style={{ margin: '5% 0 5% 0' }}
            >
                {/* {JSON.stringify(Data[0])} */}
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    style={{ border: '0px solid red' }}
                >
                    <h2
                        style={{ width: '30vw' }}
                    >
                        Keterampilan lain yang relevan dengan pekerjaan
                    </h2>
                    {!DisableEdit ?
                        <Button
                            variant='outlined'
                            size='large'
                            style={{ marginLeft: '50%', width: '10vw' }}
                        >
                            Edit
                        </Button> :
                        <div></div>}
                </Grid>
                <Table stickyHeader id='Tabel_Account_Pendidikan'>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: '5%' }} align="center">No</TableCell>
                            <TableCell style={{ width: '15%' }} align="center">Relevan dengan pekerjaan</TableCell>
                            <TableCell style={{ width: '30%' }} align="center">Tingkat Penguasaan (Sangat Baik/Baik/Cukup/Kurang)</TableCell>
                            <TableCell style={{ width: '50%' }} align="center">Catatan</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {DataKeterampilanRelevan.map((item, index) => (
                            <TableRow hover key={index + 1}>
                                <TableCell align="left">{index + 1}</TableCell>
                                <TableCell align="left">{item.Relevan}</TableCell>
                                <TableCell align="left">{item.Penguasaan}</TableCell>
                                <TableCell align="left">{item.Catatan}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div >
        </Fragment >
    )
}

export default Keterampilan
import React, { Fragment } from 'react'

import { Grid, Button, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'

const Pendidikan = ({ Data, DisableEdit }) => {
    const DataPendidikanFromal = Data[0].Formal
    const DataPendidikanNonFormal = Data[0].NonFormal
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
                        Pendidikan Formal
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
                            <TableCell style={{ width: '15%' }} align="center">Nama</TableCell>
                            <TableCell style={{ width: '30%' }} align="center">Alamat</TableCell>
                            <TableCell style={{ width: '20%' }} align="center">Jurusan</TableCell>
                            <TableCell style={{ width: '10%' }} align="center">TahunMulai</TableCell>
                            <TableCell style={{ width: '10%' }} align="center">TahunSelesai</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {DataPendidikanFromal.map((item, index) => (
                            <TableRow hover key={index + 1}>
                                <TableCell align="right">{index + 1}</TableCell>
                                <TableCell align="left">{item.Nama}</TableCell>
                                <TableCell align="left">{item.Alamat}</TableCell>
                                <TableCell align="left">{item.Jurusan}</TableCell>
                                <TableCell align="right">{item.TahunMulai}</TableCell>
                                <TableCell align="right">{item.TahunSelesai}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div >
            <div
                style={{ margin: '5% 0 5% 0' }}
            >
                {/* {JSON.stringify(Data)} */}
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
                        Pendidikan Non-Formal
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
                            <TableCell style={{ width: '5%' }} align="left">No</TableCell>
                            <TableCell style={{ width: '35%' }} align="left">Nama</TableCell>
                            <TableCell style={{ width: '10%' }} align="left">Bulan/Tahun</TableCell>
                            <TableCell style={{ width: '50%' }} align="left">Tempat & Keterangan</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {DataPendidikanNonFormal.map((item, index) => (
                            <TableRow hover key={index + 1}>
                                <TableCell align="left">{index + 1}</TableCell>
                                <TableCell align="left">{item.Nama}</TableCell>
                                <TableCell align="left">{item.Durasi}</TableCell>
                                <TableCell align="left">{item.Keterangan}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div >
        </Fragment >
    )
}

export default Pendidikan
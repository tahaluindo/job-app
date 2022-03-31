import React, { Fragment } from 'react'

import { Grid, Button, Table, TableHead, TableBody, TableRow, TableCell, TextField } from '@mui/material'

const RiwayatKerja = ({ Data, DisableEdit }) => {
    const DataRiwayatKerja = Data[0].RiwayatKerja
    const DataUraianTugas = Data[0].UraianTugas
    const DataStruktur = Data[0].Struktur
    const DataReferensi = Data[0].Referensi
    const st_textfield = { marginTop: '10px', marginBottom: '10px', width: '100%', backgroundColor: '#E0E0E0' }
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
                        Riwayat Pekerjaan
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
                            <TableCell style={{ width: '10%' }} align="center">Tahun</TableCell>
                            <TableCell style={{ width: '15%' }} align="center">Nama Perushaan</TableCell>
                            <TableCell style={{ width: '15%' }} align="center">Jabatan Sebelumnya</TableCell>
                            <TableCell style={{ width: '15%' }} align="center">Atasan Langsung</TableCell>
                            <TableCell style={{ width: '20%' }} align="center">Pokok</TableCell>
                            <TableCell style={{ width: '20%' }} align="center">Alasan Keluar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {DataRiwayatKerja.map((item, index) => (
                            <TableRow hover key={index + 1}>
                                <TableCell align="left">{index + 1}</TableCell>
                                <TableCell align="left">{item.Tahun}</TableCell>
                                <TableCell align="left">{item.Nama}</TableCell>
                                <TableCell align="left">{item.Jabatan}</TableCell>
                                <TableCell align="left">{item.Atasan}</TableCell>
                                <TableCell align="left">{item.Gaji}</TableCell>
                                <TableCell align="left">{item.Alasan}</TableCell>
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
                <TextField
                    style={st_textfield}
                    variant='outlined'
                    InputProps={{ readOnly: true, }}
                    type='text'
                    label='Uraian Tugas'
                    name='UserName'
                    value={DataUraianTugas ? DataUraianTugas : ''}
                />
                <TextField
                    style={st_textfield}
                    variant='outlined'
                    InputProps={{ readOnly: true, }}
                    type='text'
                    label='Struktur Organisasi'
                    name='UserName'
                    value={DataStruktur ? DataStruktur : ''}
                />
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
                        Referensi
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
                            <TableCell style={{ width: '15%' }} align="center">Sumber</TableCell>
                            <TableCell style={{ width: '20%' }} align="center">Nama</TableCell>
                            <TableCell style={{ width: '30%' }} align="center">Alamat & Kontak</TableCell>
                            <TableCell style={{ width: '30%' }} align="center">Keterangan</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {DataReferensi.map((item, index) => (
                            <TableRow hover key={index + 1}>
                                <TableCell align="left">{index + 1}</TableCell>
                                <TableCell align="left">{item.Sumber}</TableCell>
                                <TableCell align="left">{item.Nama}</TableCell>
                                <TableCell align="left">{item.Kontak}</TableCell>
                                <TableCell align="left">{item.Keterangan}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div >
        </Fragment >
    )
}

export default RiwayatKerja
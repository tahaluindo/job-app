import React from 'react'

import { Button, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'

const Keluarga = ({ Data, DisableEdit }) => {
    return (
        <div>
            {/* {JSON.stringify(Data)} */}
            {!DisableEdit ?
                <Button
                    variant='outlined'
                    size='large'
                    style={{ marginLeft: '90%', width: '10vw' }}
                >
                    Edit
                </Button> :
                <div></div>}
            <Table stickyHeader id='Tabel_Account_Keluarga'>
                <TableHead>
                    <TableRow>
                        <TableCell style={{ width: '5%' }} align="center">No</TableCell>
                        <TableCell style={{ width: '15%' }} align="center">Nama</TableCell>
                        <TableCell style={{ width: '10%' }} align="center">JenisKelamin</TableCell>
                        <TableCell style={{ width: '20%' }} align="center">Usia</TableCell>
                        <TableCell style={{ width: '10%' }} align="center">Pendidikan</TableCell>
                        <TableCell style={{ width: '15%' }} align="center">Pekerjaan</TableCell>
                        <TableCell style={{ width: '15%' }} align="center">Perusahaan</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Data.map((item, index) => (
                        <TableRow hover key={index + 1}>
                            <TableCell align="right">{index + 1}</TableCell>
                            <TableCell align="left">{item.Nama}</TableCell>
                            <TableCell align="left">{item.JenisKelamin}</TableCell>
                            <TableCell align="right">{item.Usia}</TableCell>
                            <TableCell align="left">{item.Pendidikan}</TableCell>
                            <TableCell align="left">{item.Pekerjaan}</TableCell>
                            <TableCell align="left">{item.Perusahaan}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default Keluarga
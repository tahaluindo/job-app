import React from "react"

import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'

const Riwayat = () => {
    const Data = [
        {
            Registrasi: '15321512',
            Posisi: 'IT Manager',
            TanggalLamaran: '12/12/12',
            ProsesAkhir: 'MCU',
            TanggalProsesAkhir: '12/20/12',
            Keterangan: 'Covid-19',
            Status: 'Gagal',
        },
        {
            Registrasi: '15321547',
            Posisi: 'IT Manager',
            TanggalLamaran: '12/12/22',
            ProsesAkhir: 'OnBoarding',
            TanggalProsesAkhir: '12/20/22',
            Keterangan: '',
            Status: 'Sukses',
        },
    ]
    return (
        <div>
            <h2
                style={{ width: '30vw' }}
            >
                Riwayat Lamaran
            </h2>
            <Table stickyHeader id='Tabel_Account_Pendidikan'>
                <TableHead>
                    <TableRow>
                        <TableCell style={{ width: '5%' }} align="center">No</TableCell>
                        <TableCell style={{ width: '10%' }} align="center">No Registrasi</TableCell>
                        <TableCell style={{ width: '15%' }} align="center">Posisi diLamar</TableCell>
                        <TableCell style={{ width: '10%' }} align="center">Tanggal Lamaran</TableCell>
                        <TableCell style={{ width: '10%' }} align="center">Proses Akhir</TableCell>
                        <TableCell style={{ width: '10%' }} align="center">Tanggal Proses Akhir</TableCell>
                        <TableCell style={{ width: '30%' }} align="center">Keterangan</TableCell>
                        <TableCell style={{ width: '10%' }} align="center">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Data.map((item, index) => (
                        <TableRow hover key={index + 1}>
                            <TableCell align="left">{index + 1}</TableCell>
                            <TableCell align="left">{item.Registrasi}</TableCell>
                            <TableCell align="left">{item.Posisi}</TableCell>
                            <TableCell align="left">{item.TanggalLamaran}</TableCell>
                            <TableCell align="left">{item.ProsesAkhir}</TableCell>
                            <TableCell align="left">{item.TanggalProsesAkhir}</TableCell>
                            <TableCell align="left">{item.Keterangan}</TableCell>
                            <TableCell
                                align="left"
                                style={{ color: item.Status === 'Sukses' ? 'green' : 'red' }}
                            >
                                {item.Status}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default Riwayat
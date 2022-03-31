import React, { Fragment } from 'react'

import { Collapse, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

import DetailPenilianKandidat from './Modal/DetailPenilianKandidat'
import GenericModals from '../../../GenericModals'

const HRGA = () => {
    const [MenungguOpen, setMenungguOpen] = React.useState(true)
    const [SelesaiOpen, setSelesaiOpen] = React.useState(false)
    const handleMenungguOpen = () => {
        setMenungguOpen(!MenungguOpen);
    }
    const handleSelesaiOpen = () => {
        setSelesaiOpen(!SelesaiOpen);
    }
    const Data = [
        {
            Registrasi: '123124123123',
            Nama: 'Anton',
            Posisi: 'Manager IT',
        },
        {
            Registrasi: '123124132123',
            Nama: 'Nisa',
            Posisi: 'RnD',
        },
        {
            Registrasi: '123124142123',
            Nama: 'Desi',
            Posisi: 'Chef',
        }
    ]
    return (
        <Fragment>
            <h2>
                List Interview HRGA
            </h2>
            <h3
                onClick={handleMenungguOpen}
                style={{ display: 'flex', alignContent: 'center', verticalAlign: 'center', cursor: 'pointer' }}
            >
                Menunggu Penilaian{MenungguOpen ? <ExpandLess /> : <ExpandMore />}
            </h3>
            <Collapse in={MenungguOpen} timeout="auto" unmountOnExit>
                <Table stickyHeader id='Tabel_Account_Pendidikan'>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: '5%' }} align="center">No</TableCell>
                            <TableCell style={{ width: '35%' }} align="center">No Registrasi</TableCell>
                            <TableCell style={{ width: '20%' }} align="center">Nama Kandidat</TableCell>
                            <TableCell style={{ width: '20%' }} align="center">Posisi Diajukan</TableCell>
                            <TableCell style={{ width: '20%' }} align="center">Detail Pengajuan</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Data.map((item, index) =>
                            <TableRow hover key={index + 1}>
                                <TableCell align="left">{index + 1}</TableCell>
                                <TableCell align="left">{item.Registrasi}</TableCell>
                                <TableCell align="left">{item.Nama}</TableCell>
                                <TableCell align="center">{item.Posisi}</TableCell>
                                <TableCell align="center">
                                    <GenericModals
                                        size='xl'
                                        header='Detail Penilian Kandidat'
                                        body={<DetailPenilianKandidat />}
                                        Buttoncolor='primary'
                                        ButtononClickeven={() => null}
                                        Buttonlabel={'Detail'}
                                    />
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Collapse>
            <div
                style={{ margin: '0 0 5% 0' }}
            >
                <h3
                    onClick={handleSelesaiOpen}
                    style={{ display: 'flex', alignContent: 'center', verticalAlign: 'center', cursor: 'pointer' }}
                >
                    Selesai diNilai{SelesaiOpen ? <ExpandLess /> : <ExpandMore />}
                </h3>
                <Collapse in={SelesaiOpen} timeout="auto" unmountOnExit>
                    <Table stickyHeader id='Tabel_Account_Pendidikan'>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: '5%' }} align="center">No</TableCell>
                                <TableCell style={{ width: '35%' }} align="center">No Registrasi</TableCell>
                                <TableCell style={{ width: '20%' }} align="center">Nama Kandidat</TableCell>
                                <TableCell style={{ width: '20%' }} align="center">Posisi Diajukan</TableCell>
                                <TableCell style={{ width: '20%' }} align="center">Detail Pengajuan</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Data.map((item, index) =>
                                <TableRow hover key={index + 1}>
                                    <TableCell align="left">{index + 1}</TableCell>
                                    <TableCell align="left">{item.Registrasi}</TableCell>
                                    <TableCell align="left">{item.Nama}</TableCell>
                                    <TableCell align="center">{item.Posisi}</TableCell>
                                    <TableCell align="center">
                                        <GenericModals
                                            size='xl'
                                            header='Detail Penilian Kandidat'
                                            body={<DetailPenilianKandidat />}
                                            Buttoncolor='primary'
                                            ButtononClickeven={() => null}
                                            Buttonlabel={'Detail'}
                                        />
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </Collapse>
            </div>
        </Fragment>
    )
}

export default HRGA
import React, { Fragment } from 'react'

import { Collapse, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

import GenericModals from '../../../GenericModals'
import SubmitKontrak from './Modal/Offering/SubmitKontrak'
import SubmitedKontrak from './Modal/Offering/SubmitedKontrak'

const Offering = () => {
    const [BlmOpen, setBlmOpen] = React.useState(false)
    const [MenungguOpen, setMenungguOpen] = React.useState(true)
    const [SelesaiOpen, setSelesaiOpen] = React.useState(false)
    const handleBlmOpen = () => {
        setBlmOpen(!BlmOpen);
    }
    const handleMenungguOpen = () => {
        setMenungguOpen(!MenungguOpen);
    }
    const handleSelesaiOpen = () => {
        setSelesaiOpen(!SelesaiOpen);
    }
    const Data1 = [
        {
            Nama: 'Antoni',
            Posisi: 'Manager IT',
            JoinDate: '12/12/12',
            TanggalNotif: '10/10/12'
        },
        {
            Nama: 'Antono',
            Posisi: 'Sopir',
            JoinDate: '12/12/13',
            TanggalNotif: '10/10/13'
        },
        {
            Nama: 'Anton',
            Posisi: 'Head',
            JoinDate: '12/10/12',
            TanggalNotif: '10/10/12'
        }
    ]
    const Data = [
        {
            Nama: 'Anton',
            Posisi: 'Manager IT',
            JoinDate: '12/12/12'
        },
        {
            Nama: 'Anton',
            Posisi: 'Sopir',
            JoinDate: '12/12/13'
        },
        {
            Nama: 'Anton',
            Posisi: 'Head',
            JoinDate: '12/10/12'
        }
    ]
    return (
        <Fragment>
            <h2>
                Offering
            </h2>
            <h3
                onClick={handleBlmOpen}
                style={{ display: 'flex', alignContent: 'center', verticalAlign: 'center', cursor: 'pointer' }}
            >
                Dinyatakan Lulus tapi Belum Upload{BlmOpen ? <ExpandLess /> : <ExpandMore />}
            </h3>
            <Collapse in={BlmOpen} timeout="auto" unmountOnExit>
                <Table stickyHeader id='Tabel_Account_Pendidikan'>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: '5%' }} align="center">No</TableCell>
                            <TableCell style={{ width: '35%' }} align="center">Nama</TableCell>
                            <TableCell style={{ width: '20%' }} align="center">Posisi</TableCell>
                            <TableCell style={{ width: '20%' }} align="center">JoinDate</TableCell>
                            <TableCell style={{ width: '20%' }} align="center">Tanggal Notif</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Data1.map((item, index) =>
                            <TableRow hover key={index + 1}>
                                <TableCell align="left">{index + 1}</TableCell>
                                <TableCell align="left">{item.Nama}</TableCell>
                                <TableCell align="left">{item.Posisi}</TableCell>
                                <TableCell align="center">{item.JoinDate}</TableCell>
                                <TableCell align="center">{item.TanggalNotif}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Collapse>
            <h3
                onClick={handleMenungguOpen}
                style={{ display: 'flex', alignContent: 'center', verticalAlign: 'center', cursor: 'pointer' }}
            >
                Menunggu Persetujuan{MenungguOpen ? <ExpandLess /> : <ExpandMore />}
            </h3>
            <Collapse in={MenungguOpen} timeout="auto" unmountOnExit>
                <Table stickyHeader id='Tabel_Account_Pendidikan'>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: '5%' }} align="center">No</TableCell>
                            <TableCell style={{ width: '35%' }} align="center">Nama</TableCell>
                            <TableCell style={{ width: '20%' }} align="center">Posisi</TableCell>
                            <TableCell style={{ width: '20%' }} align="center">JoinDate</TableCell>
                            <TableCell style={{ width: '20%' }} align="center">Submit Document</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Data.map((item, index) =>
                            <TableRow hover key={index + 1}>
                                <TableCell align="left">{index + 1}</TableCell>
                                <TableCell align="left">{item.Nama}</TableCell>
                                <TableCell align="left">{item.Posisi}</TableCell>
                                <TableCell align="center">{item.JoinDate}</TableCell>
                                <TableCell align="center">
                                    <GenericModals
                                        size='l'
                                        Buttonvariant='contained'
                                        header='Submit'
                                        body={<SubmitKontrak />}
                                        Buttoncolor='primary'
                                        ButtononClickeven={() => null}
                                        Buttonlabel={'Submit'}
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
                    Selesai{SelesaiOpen ? <ExpandLess /> : <ExpandMore />}
                </h3>
                <Collapse in={SelesaiOpen} timeout="auto" unmountOnExit>
                    <Table stickyHeader id='Tabel_Account_Pendidikan'>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: '5%' }} align="center">No</TableCell>
                                <TableCell style={{ width: '35%' }} align="center">Nama</TableCell>
                                <TableCell style={{ width: '20%' }} align="center">Posisi</TableCell>
                                <TableCell style={{ width: '20%' }} align="center">JoinDate</TableCell>
                                <TableCell style={{ width: '20%' }} align="center">Notification</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Data.map((item, index) =>
                                <TableRow hover key={index + 1}>
                                    <TableCell align="left">{index + 1}</TableCell>
                                    <TableCell align="left">{item.Nama}</TableCell>
                                    <TableCell align="left">{item.Posisi}</TableCell>
                                    <TableCell align="center">{item.JoinDate}</TableCell>
                                    <TableCell align="center">
                                        <GenericModals
                                            size='l'
                                            header='Detail'
                                            body={<SubmitedKontrak />}
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

export default Offering
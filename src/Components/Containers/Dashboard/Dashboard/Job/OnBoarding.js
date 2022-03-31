import React, { Fragment } from 'react'

import { Collapse, Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded'

import GenericModals from '../../../GenericModals'

const NotificationWarning = () => {
    return (
        <div>
            <center>
                <b>
                    Aksi ini akan mengirimkan pemberitahuan mengenai karyawan baru ke seluruh email etana
                </b>
                <br />
                <Button
                    variant='contained'
                    style={{ margin: '1% 0 3% 0', width: '60%' }}
                >
                    Send
                </Button>
            </center>

        </div>
    )
}

const OnBoarding = () => {
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
                OnBoarding
            </h2>
            <h3
                onClick={handleMenungguOpen}
                style={{ display: 'flex', alignContent: 'center', verticalAlign: 'center', cursor: 'pointer' }}
            >
                Upcoming{MenungguOpen ? <ExpandLess /> : <ExpandMore />}
            </h3>
            <Collapse in={MenungguOpen} timeout="auto" unmountOnExit>
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
                                        size='s'
                                        Buttonvariant='contained'
                                        header='Notice all etana?'
                                        body={<NotificationWarning />}
                                        Buttoncolor='primary'
                                        ButtononClickeven={() => null}
                                        Buttonlabel={<NotificationsActiveRoundedIcon />}
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
                    Join{SelesaiOpen ? <ExpandLess /> : <ExpandMore />}
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
                                        <Button
                                            variant='outlined'
                                        >
                                            Detail
                                        </Button>
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

export default OnBoarding
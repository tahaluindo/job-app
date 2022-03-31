import React, { Fragment } from 'react'

import { Collapse, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

import GenericModals from '../../../GenericModals'
import SubmitKontrak from './Modal/PReboarding/SubmitKontrak'

const PReboarding = () => {
    const [MenungguOpen, setMenungguOpen] = React.useState(true)
    const handleMenungguOpen = () => {
        setMenungguOpen(!MenungguOpen);
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
                PReboarding
            </h2>
            <div
                style={{ margin: '0 0 5% 0' }}
            >
                <h3
                    onClick={handleMenungguOpen}
                    style={{ display: 'flex', alignContent: 'center', verticalAlign: 'center', cursor: 'pointer' }}
                >
                    Menunggu Konfirmasi{MenungguOpen ? <ExpandLess /> : <ExpandMore />}
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
                                            size='xl'
                                            Buttonvariant='contained'
                                            header='Detail'
                                            body={<SubmitKontrak />}
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

export default PReboarding
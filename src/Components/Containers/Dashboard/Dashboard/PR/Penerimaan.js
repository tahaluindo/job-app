import React, { Fragment } from 'react'

import { Collapse, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

import PenerimaanPengajuan from './Sub/PenerimaanPengajuan'
import PengajuanDiterima from './Sub/PengajuanDiterima'
import PengajuanDitolak from './Sub/PengajuanDitolak'
import GenericModals from '../../../GenericModals'

const Penerimaan = () => {
    const [MenungguOpen, setMenungguOpen] = React.useState(true)
    const [TerimaOpen, setTerimaOpen] = React.useState(false)
    const [TolakOpen, setTolakOpen] = React.useState(false)
    const handleMenungguOpen = () => {
        setMenungguOpen(!MenungguOpen);
    }
    const handleTerimaOpen = () => {
        setTerimaOpen(!TerimaOpen);
    }
    const handleTolakOpen = () => {
        setTolakOpen(!TolakOpen);
    }
    const Data = [
        {
            NomerPangajuan: '123124123123',
            TanggalPengajuan: '12/1/13',
            Status: 'Menunggu'
        },
        {
            NomerPangajuan: '31234123',
            TanggalPengajuan: '12/1/13',
            Status: 'Menunggu'
        },
        {
            NomerPangajuan: '1235123',
            TanggalPengajuan: '12/1/13',
            Status: 'Menunggu'
        }
    ]
    const Data1 = [
        {
            NomerPangajuan: '123124123123',
            TanggalPengajuan: '12/1/13',
            Status: 'Diterima'
        },
        {
            NomerPangajuan: '31234123',
            TanggalPengajuan: '12/1/13',
            Status: 'Diterima'
        },
        {
            NomerPangajuan: '1235123',
            TanggalPengajuan: '12/1/13',
            Status: 'Diterima'
        }
    ]
    const Data2 = [
        {
            NomerPangajuan: '123124123123',
            TanggalPengajuan: '12/1/13',
            Status: 'Ditolak'
        },
        {
            NomerPangajuan: '31234123',
            TanggalPengajuan: '12/1/13',
            Status: 'Ditolak'
        },
        {
            NomerPangajuan: '1235123',
            TanggalPengajuan: '12/1/13',
            Status: 'Ditolak'
        }
    ]
    return (
        <Fragment>
            <h2>
                Penerimaan
            </h2>
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
                            <TableCell style={{ width: '35%' }} align="center">Nomer Pangajuan</TableCell>
                            <TableCell style={{ width: '20%' }} align="center">Tanggal Pengajuan</TableCell>
                            <TableCell style={{ width: '20%' }} align="center">Status</TableCell>
                            <TableCell style={{ width: '20%' }} align="center">Detail Pengajuan</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Data.map((item, index) =>
                            <TableRow hover key={index + 1}>
                                <TableCell align="left">{index + 1}</TableCell>
                                <TableCell align="left">{item.NomerPangajuan}</TableCell>
                                <TableCell align="left">{item.TanggalPengajuan}</TableCell>
                                <TableCell align="center">{item.Status}</TableCell>
                                <TableCell align="center">
                                    <GenericModals
                                        size='xl'
                                        header='Detail Pengajuan Form'
                                        body={<PenerimaanPengajuan />}
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
            <h3
                onClick={handleTerimaOpen}
                style={{ display: 'flex', alignContent: 'center', verticalAlign: 'center', cursor: 'pointer' }}
            >
                Diterima{TerimaOpen ? <ExpandLess /> : <ExpandMore />}
            </h3>
            <Collapse in={TerimaOpen} timeout="auto" unmountOnExit>
                <Table stickyHeader id='Tabel_Account_Pendidikan'>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: '5%' }} align="center">No</TableCell>
                            <TableCell style={{ width: '35%' }} align="center">Nomer Pangajuan</TableCell>
                            <TableCell style={{ width: '20%' }} align="center">Tanggal Pengajuan</TableCell>
                            <TableCell style={{ width: '20%' }} align="center">Status</TableCell>
                            <TableCell style={{ width: '20%' }} align="center">Detail Pengajuan</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Data1.map((item, index) =>
                            <TableRow hover key={index + 1}>
                                <TableCell align="left">{index + 1}</TableCell>
                                <TableCell align="left">{item.NomerPangajuan}</TableCell>
                                <TableCell align="left">{item.TanggalPengajuan}</TableCell>
                                <TableCell align="center" style={{ color: 'green' }}>{item.Status}</TableCell>
                                <TableCell align="center">
                                    <GenericModals
                                        size='xl'
                                        header='Detail Pengajuan Form'
                                        body={<PengajuanDiterima />}
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
            <h3
                onClick={handleTolakOpen}
                style={{ display: 'flex', alignContent: 'center', verticalAlign: 'center', cursor: 'pointer' }}
            >
                Ditolak{TolakOpen ? <ExpandLess /> : <ExpandMore />}
            </h3>
            <Collapse in={TolakOpen} timeout="auto" unmountOnExit>
                <Table stickyHeader id='Tabel_Account_Pendidikan'>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: '5%' }} align="center">No</TableCell>
                            <TableCell style={{ width: '35%' }} align="center">Nomer Pangajuan</TableCell>
                            <TableCell style={{ width: '20%' }} align="center">Tanggal Pengajuan</TableCell>
                            <TableCell style={{ width: '20%' }} align="center">Status</TableCell>
                            <TableCell style={{ width: '20%' }} align="center">Detail Pengajuan</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Data2.map((item, index) =>
                            <TableRow hover key={index + 1}>
                                <TableCell align="left">{index + 1}</TableCell>
                                <TableCell align="left">{item.NomerPangajuan}</TableCell>
                                <TableCell align="left">{item.TanggalPengajuan}</TableCell>
                                <TableCell align="center" style={{ color: 'red' }}>{item.Status}</TableCell>
                                <TableCell align="center">
                                    <GenericModals
                                        size='xl'
                                        header='Detail Pengajuan Form'
                                        body={<PengajuanDitolak />}
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
        </Fragment>
    )
}

export default Penerimaan
import React, { Fragment } from 'react'

import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'

import PengajuanForm from './Sub/PengajuanForm'
import DetailPengajuan from './Sub/DetailPengajuan'
import GenericModals from '../../../GenericModals'

const Pengajuan = () => {
    const Data = [
        {
            NomerPangajuan: '123124123123',
            TanggalPengajuan: '12/1/13',
            Status: 'Menunggu Acc'
        },
        {
            NomerPangajuan: '31234123',
            TanggalPengajuan: '12/1/13',
            Status: 'Selesai'
        },
        {
            NomerPangajuan: '1235123',
            TanggalPengajuan: '12/1/13',
            Status: 'Proses Positng Job'
        }
    ]
    return (
        <Fragment>
            <h2>
                Pengajuan
            </h2>
            <center>
                <GenericModals
                    size='xl'
                    header='Buat Pengajuan'
                    body={<PengajuanForm />}
                    Buttoncolor='primary'
                    Buttonstyle={{ width: '90%' }}
                    ButtononClickeven={() => null}
                    Buttonlabel={'+ Buat Pengajuan'}
                />
            </center>
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
                                    body={<DetailPengajuan />}
                                    Buttoncolor='primary'
                                    ButtononClickeven={() => null}
                                    Buttonlabel={'Detail'}
                                />
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </Fragment>
    )
}

export default Pengajuan
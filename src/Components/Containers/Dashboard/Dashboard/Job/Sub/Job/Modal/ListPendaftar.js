import React, { Fragment } from 'react'

import { Collapse, Table, TableHead, TableBody, TableRow, TableCell, TextField, InputAdornment, Button, Paper, Pagination } from '@mui/material'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import SearchIcon from '@mui/icons-material/Search'

import GenericModals from '../../../../../../GenericModals'
import DetailDiajukan from './Sub/DetailDiajukan'
import DetailMenunggu from './Sub/DetailMenunggu'

class ListPendaftar extends React.Component {
    state = {
        isDiajukanOpen: false,
        isSearchOpen: false,
        isPendaftarOpen: true,
        Search: '',
        Nama: '',
        Registrasi: '',
        UmurMin: '',
        UmurMax: '',
        Pendidikan: '',
        Lokasi: '',
        Instansi: '',
        Jurusan: '',
        MinPengalaman: 0,
    }
    handleDiajukanOpen = () => {
        this.setState({ isDiajukanOpen: !this.state.isDiajukanOpen })
    }
    handleSearchOpen = () => {
        this.setState({ isSearchOpen: !this.state.isSearchOpen })
    }
    handlePendaftarOpen = () => {
        this.setState({ isPendaftarOpen: !this.state.isPendaftarOpen })
    }
    onChangeField = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const DataDiajukan = [
            {
                NomerPangajuan: '121314',
                Nama: 'Andi',
                Umur: '25',
                Pendidikan: 'S1',
                Instansi: 'Mercubuana',
                Jurusan: 'Pesikologi',
                Pengalaman: '1',
                Status: 'Diajukan',
            },
            {
                NomerPangajuan: '121315',
                Nama: 'Rangga',
                Umur: '25',
                Pendidikan: 'S2',
                Instansi: 'Institut Teknologi Bandung',
                Jurusan: 'Pesikologi',
                Pengalaman: '1',
                Status: 'Ditolak',
            },
            {
                NomerPangajuan: '121316',
                Nama: 'Ade',
                Umur: '25',
                Pendidikan: 'S1',
                Instansi: 'Universitas Barawijaya',
                Jurusan: 'Pesikologi',
                Pengalaman: '1',
                Status: 'Diajukan',
            },
        ]
        const {
            isDiajukanOpen,
            isSearchOpen,
            isPendaftarOpen,
            Search,
            Nama,
            Registrasi,
            UmurMin,
            UmurMax,
            Pendidikan,
            Lokasi,
            Instansi,
            Jurusan,
            MinPengalaman,
        } = this.state
        const st_textfield = { marginTop: '10px', marginBottom: '10px', width: '100%' }
        return (
            <Fragment>
                <h2>
                    Pendaftar
                </h2>
                <h3
                    onClick={this.handleDiajukanOpen}
                    style={{ display: 'flex', alignContent: 'center', verticalAlign: 'center', cursor: 'pointer' }}
                >
                    Diajukan{isDiajukanOpen ? <ExpandLess /> : <ExpandMore />}
                </h3>
                <Collapse in={isDiajukanOpen} timeout="auto" unmountOnExit>
                    <Table stickyHeader id='Tabel_Account_Pendidikan'>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: '5%' }} align="center">No</TableCell>
                                <TableCell style={{ width: '10%' }} align="center">Nomer Pangajuan</TableCell>
                                <TableCell style={{ width: '10%' }} align="center">Nama</TableCell>
                                <TableCell style={{ width: '5%' }} align="center">Umur</TableCell>
                                <TableCell style={{ width: '5%' }} align="center">Pendidikan Terakhir</TableCell>
                                <TableCell style={{ width: '10%' }} align="center">Instansi</TableCell>
                                <TableCell style={{ width: '10%' }} align="center">Jurusan</TableCell>
                                <TableCell style={{ width: '5%' }} align="center">Pengalaman</TableCell>
                                <TableCell style={{ width: '10%' }} align="center">Status</TableCell>
                                <TableCell style={{ width: '20%' }} align="center">Detail </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {DataDiajukan.map((item, index) =>
                                <TableRow hover key={index + 1}>
                                    <TableCell align="left">{index + 1}</TableCell>
                                    <TableCell align="left">{item.NomerPangajuan}</TableCell>
                                    <TableCell align="left">{item.Nama}</TableCell>
                                    <TableCell align="left">{item.Umur}</TableCell>
                                    <TableCell align="left">{item.Pendidikan}</TableCell>
                                    <TableCell align="left">{item.Instansi}</TableCell>
                                    <TableCell align="left">{item.Jurusan}</TableCell>
                                    <TableCell align="left">{item.Pengalaman}</TableCell>
                                    <TableCell align="left"
                                        style={{ color: item.Status === 'Ditolak' ? 'red' : 'green' }}
                                    >{item.Status}</TableCell>
                                    <TableCell align="center">
                                        <GenericModals
                                            size='m'
                                            header='List Pendaftar'
                                            body={<DetailDiajukan />}
                                            // Buttonvariant='contained'
                                            Buttoncolor='primary'
                                            ButtononClickeven={() => null}
                                            Buttonlabel={'Detail'}
                                        // Buttonstyle={{ width: '100%' }}
                                        />
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </Collapse>
                <div
                    style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}
                >
                    <TextField
                        variant='outlined'
                        type='text'
                        label='Cari Berdasarkan Nama atau Nomer Registrasi'
                        name='Search'
                        value={Search}
                        style={{ ...st_textfield, ...{ width: '80%' } }}
                        onChange={this.onChangeField}
                        InputProps={{
                            startAdornment:
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>,
                        }}
                    />
                    <Button
                        variant='contained'
                        onClick={this.handleSearchOpen}
                        style={{ width: '10%', margin: '0 0 0 5%', padding: '1%' }}
                    >
                        {isSearchOpen ? <ExpandLess /> : <ExpandMore />}
                    </Button>
                </div>
                <Collapse in={isSearchOpen} timeout="auto" unmountOnExit>
                    <Paper
                        style={{ padding: '1%', borderTop: '0px solid black' }}
                    >
                        <TextField
                            variant='outlined'
                            type='text'
                            label='Nama'
                            name='Nama'
                            value={Nama}
                            style={{ ...st_textfield }}
                            onChange={this.onChangeField}
                        />
                        <TextField
                            variant='outlined'
                            type='text'
                            label='Nomer Registrasi'
                            name='Registrasi'
                            value={Registrasi}
                            style={{ ...st_textfield }}
                            onChange={this.onChangeField}
                        />
                        <TextField
                            variant='outlined'
                            type='text'
                            label='Umur Minimal'
                            name='UmurMin'
                            value={UmurMin}
                            style={{ ...st_textfield, ...{ width: '40%' } }}
                            onChange={this.onChangeField}
                        />
                        <TextField
                            variant='outlined'
                            type='text'
                            label='Umur Maksimal'
                            name='UmurMax'
                            value={UmurMax}
                            style={{ ...st_textfield, ...{ width: '40%', marginLeft: '5%' } }}
                            onChange={this.onChangeField}
                        />
                        <TextField
                            variant='outlined'
                            type='text'
                            label='Pendidikan Minimal'
                            name='Pendidikan'
                            value={Pendidikan}
                            style={{ ...st_textfield }}
                            onChange={this.onChangeField}
                        />
                        <TextField
                            variant='outlined'
                            type='text'
                            label='Lokasi'
                            name='Lokasi'
                            value={Lokasi}
                            style={{ ...st_textfield }}
                            onChange={this.onChangeField}
                        />
                        <TextField
                            variant='outlined'
                            type='text'
                            label='Instansi'
                            name='Instansi'
                            value={Instansi}
                            style={{ ...st_textfield }}
                            onChange={this.onChangeField}
                        />
                        <TextField
                            variant='outlined'
                            type='text'
                            label='Jurusan'
                            name='Jurusan'
                            value={Jurusan}
                            style={{ ...st_textfield }}
                            onChange={this.onChangeField}
                        />
                        <TextField
                            variant='outlined'
                            type='text'
                            label='Minimal Pengalaman (Tahun)'
                            name='MinPengalaman'
                            value={MinPengalaman}
                            style={{ ...st_textfield }}
                            onChange={this.onChangeField}
                        />
                        <center>
                            <Button
                                variant='contained'
                                style={{ width: '60%', margin:'1% 0 3% 0' }}
                            >
                                <SearchIcon /> Search
                            </Button>
                        </center>
                    </Paper>
                </Collapse>
                <div
                    style={{ margin: '0 0 5% 0' }}
                >
                    <h3
                        onClick={this.handlePendaftarOpen}
                        style={{ display: 'flex', alignContent: 'center', verticalAlign: 'center', cursor: 'pointer' }}
                    >
                        Pendaftar{isPendaftarOpen ? <ExpandLess /> : <ExpandMore />}
                    </h3>
                    <Collapse in={isPendaftarOpen} timeout="auto" unmountOnExit>
                        <Table stickyHeader id='Tabel_Account_Pendidikan'>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ width: '5%' }} align="center">No</TableCell>
                                    <TableCell style={{ width: '10%' }} align="center">Nomer Pangajuan</TableCell>
                                    <TableCell style={{ width: '10%' }} align="center">Nama</TableCell>
                                    <TableCell style={{ width: '5%' }} align="center">Umur</TableCell>
                                    <TableCell style={{ width: '5%' }} align="center">Pendidikan Terakhir</TableCell>
                                    <TableCell style={{ width: '10%' }} align="center">Instansi</TableCell>
                                    <TableCell style={{ width: '10%' }} align="center">Jurusan</TableCell>
                                    <TableCell style={{ width: '5%' }} align="center">Pengalaman</TableCell>
                                    <TableCell style={{ width: '10%' }} align="center">Status</TableCell>
                                    <TableCell style={{ width: '20%' }} align="center">Detail </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {DataDiajukan.map((item, index) =>
                                    <TableRow hover key={index + 1}>
                                        <TableCell align="left">{index + 1}</TableCell>
                                        <TableCell align="left">{item.NomerPangajuan}</TableCell>
                                        <TableCell align="left">{item.Nama}</TableCell>
                                        <TableCell align="left">{item.Umur}</TableCell>
                                        <TableCell align="left">{item.Pendidikan}</TableCell>
                                        <TableCell align="left">{item.Instansi}</TableCell>
                                        <TableCell align="left">{item.Jurusan}</TableCell>
                                        <TableCell align="left">{item.Pengalaman}</TableCell>
                                        <TableCell align="left">Menunggu</TableCell>
                                        <TableCell align="center">
                                            <GenericModals
                                                size='m'
                                                header='List Pendaftar'
                                                body={<DetailMenunggu />}
                                                // Buttonvariant='contained'
                                                Buttoncolor='primary'
                                                ButtononClickeven={() => null}
                                                Buttonlabel={'Detail'}
                                            // Buttonstyle={{ width: '100%' }}
                                            />
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                        <div
                            style={{ margin: '1% 0 0 0', display: 'flex', justifyContent: 'center' }}
                        >
                            <Pagination
                                count={10}
                                variant="outlined"
                                shape="rounded"
                            />
                        </div>
                    </Collapse>
                </div>
            </Fragment>
        )
    }
}

export default ListPendaftar
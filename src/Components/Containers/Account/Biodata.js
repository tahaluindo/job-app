import React from 'react'

import { Button, Avatar, TextField } from '@mui/material'

const Biodata = ({ Data, DisableEdit }) => {
    const st_textfield = { marginTop: '10px', marginBottom: '10px', width: '100%', backgroundColor: '#E0E0E0' }
    const st_20 = { width: '20%', }
    const st_70 = { width: '70%', }
    const st_Half = { width: '45%' }
    return (
        <div>
            {!DisableEdit ?
                <Button
                    variant='outlined'
                    size='large'
                    style={{ marginLeft: '90%', width: '10vw' }}
                >
                    Edit
                </Button> :
                <div></div>}
            <Avatar
                alt="Avatar"
                src={null}
                // src={AccountDetail.ProfilePicture ? `${DefaultUrl}/${AccountDetail.ProfilePicture}` : null} 
                style={{ width: '10vw', height: '10vw', margin: 'auto', marginBottom: '20px', marginLeft: 'auto', display: 'block', position: 'relative' }}
            />
            <TextField
                style={st_textfield}
                variant='outlined'
                InputProps={{ readOnly: true, }}
                type='text'
                label='Nama Lengkap'
                name='UserName'
                value={Data?.NamaLengkap ? Data.NamaLengkap : ''
                }
            />
            <TextField
                style={{ ...st_textfield, ...st_20 }}
                variant='outlined'
                InputProps={{ readOnly: true, }}
                type='text'
                label='Tempat Lahir'
                name='UserName'
                value={Data?.TempatLahir ? Data.TempatLahir : ''}
            />
            <TextField
                style={{ ...st_textfield, ...st_70, marginLeft: '5%' }}
                variant='outlined'
                InputProps={{ readOnly: true, }}
                type='text'
                label='Tanggal Lahir'
                name='UserName'
                value={Data?.TanggalLahir ? Data.TanggalLahir : ''}
            />
            <TextField
                style={st_textfield}
                variant='outlined'
                InputProps={{ readOnly: true, }}
                type='text'
                label='Alamat Tinggal'
                name='UserName'
                value={Data?.AlamatTinggal ? Data.AlamatTinggal : ''}
            />
            <TextField
                style={st_textfield}
                variant='outlined'
                InputProps={{ readOnly: true, }}
                type='text'
                label='Alamat KTP'
                name='UserName'
                value={Data?.AlamatKTP ? Data.AlamatKTP : ''}
            />
            <TextField
                style={{ ...st_textfield, ...st_Half }}
                variant='outlined'
                InputProps={{ readOnly: true, }}
                type='text'
                label='Tlp Rumah'
                name='UserName'
                value={Data?.TlpRumah ? Data.TlpRumah : ''}
            />
            <TextField
                style={{ ...st_textfield, ...st_Half, marginLeft: '5%' }}
                variant='outlined'
                InputProps={{ readOnly: true, }}
                type='text'
                label='Tlp Kantor'
                name='UserName'
                value={Data?.TlpKantor ? Data.TlpKantor : ''}
            />
            <TextField
                style={{ ...st_textfield, ...st_Half }}
                variant='outlined'
                InputProps={{ readOnly: true, }}
                type='text'
                label='Tlp Seluler'
                name='UserName'
                value={Data?.TlpSeluler ? Data.TlpSeluler : ''}
            />
            <TextField
                style={{ ...st_textfield, ...st_Half, marginLeft: '5%' }}
                variant='outlined'
                InputProps={{ readOnly: true, }}
                type='text'
                label='Golongan Darah'
                name='UserName'
                value={Data?.GolonganDarah ? Data.GolonganDarah : ''}
            />
            <TextField
                style={{ ...st_textfield, ...st_Half }}
                variant='outlined'
                InputProps={{ readOnly: true, }}
                type='text'
                label='Agama'
                name='UserName'
                value={Data?.Agama ? Data.Agama : ''}
            />
            <TextField
                style={{ ...st_textfield, ...st_Half, marginLeft: '5%' }}
                variant='outlined'
                InputProps={{ readOnly: true, }}
                type='text'
                label='Jenis Kelamin'
                name='UserName'
                value={Data?.JenisKelamin ? Data.JenisKelamin : ''}
            />
            <TextField
                style={{ ...st_textfield, ...st_Half }}
                variant='outlined'
                InputProps={{ readOnly: true, }}
                type='text'
                label='Tinggi'
                name='UserName'
                value={Data?.Tinggi ? Data.Tinggi : ''}
            />
            <TextField
                style={{ ...st_textfield, ...st_Half, marginLeft: '5%' }}
                variant='outlined'
                InputProps={{ readOnly: true, }}
                type='text'
                label='Berat'
                name='UserName'
                value={Data?.Berat ? Data.Berat : ''}
            />
            <TextField
                style={st_textfield}
                variant='outlined'
                InputProps={{ readOnly: true, }}
                type='text'
                label='No KTP'
                name='UserName'
                value={Data?.NoKTP ? Data.NoKTP : ''
                }
            />
            <TextField
                style={st_textfield}
                variant='outlined'
                InputProps={{ readOnly: true, }}
                type='text'
                label='Status Perkawinan'
                name='UserName'
                value={Data?.StatusPerkawinan ? Data.StatusPerkawinan : ''
                }
            />
            <TextField
                style={st_textfield}
                variant='outlined'
                InputProps={{ readOnly: true, }}
                type='text'
                label='Hobi'
                name='UserName'
                value={Data?.Hobi ? Data.Hobi : ''
                }
            />
            <TextField
                style={{ ...st_textfield, ...st_Half }}
                variant='outlined'
                InputProps={{ readOnly: true, }}
                type='text'
                label='SIM'
                name='UserName'
                value={Data?.SIM ? Data.SIM : ''}
            />
            <TextField
                style={{ ...st_textfield, ...st_Half, marginLeft: '5%' }}
                variant='outlined'
                InputProps={{ readOnly: true, }}
                type='text'
                label='SimExp'
                name='UserName'
                value={Data?.SimExp ? Data.SimExp : ''}
            />
            <TextField
                style={{ ...st_textfield, ...st_Half }}
                variant='outlined'
                InputProps={{ readOnly: true, }}
                type='text'
                label='Kendaraan'
                name='UserName'
                value={Data?.Kendaraan ? Data.Kendaraan : ''}
            />
            <TextField
                style={{ ...st_textfield, ...st_Half, marginLeft: '5%' }}
                variant='outlined'
                InputProps={{ readOnly: true, }}
                type='text'
                label='Milik'
                name='UserName'
                value={Data?.Milik ? Data.Milik : ''}
            />
        </div>
    )
}

export default Biodata
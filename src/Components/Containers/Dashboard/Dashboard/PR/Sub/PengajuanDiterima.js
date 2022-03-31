import React from 'react'

import { Switch, Paper, TextField, FormControl, InputLabel, Select } from '@mui/material'

const PengajuanDiterima = () => {
    const st_textfield = { marginTop: '10px', marginBottom: '10px', width: '100%', backgroundColor: '#E0E0E0' }
    const [Jenis, setJenis] = React.useState(true)
    const [Keterangan, setKeterangan] = React.useState('')
    const SelectFormOnChange = (e) => {
        setJenis({ Jenis: e.target.value })
    }
    const FormOnChange = (e) => {
        setKeterangan({ Keterangan: e.target.value })
    }
    // const st_20 = { width: '20%', }
    // const st_70 = { width: '70%', }
    const st_Half = { width: '45%' }
    const Data = {
        Diiklankan: true,
        NamaPosisi: 'IT Staf',
        Level: 'Junior',
        CostCenter: '123asd',
        TipeKepegawaian: 'Karyawan',
        Melapor: 'Head',
        JumlahBawahan: 2,
        PosisiDibutuhkan: 5,
        Lokasi: 'Jakarta',
        New: 'Baru',
        Peralatan: 'Leptop, Hp',
        Uraian: 'membantu divisi lain dalam aktifitasnya',
        UsiaMin: 21,
        UsiaMax: 30,
        JenisKelamin: 'Laki',
        Pendidikan: 'S2',
        Jurusan: 'IT',
        Bahasa: '-',
        Pengalaman: 2,
        Catatan: '-',
        NamaPemohon: "anda",
        DivisiPemohon: 'IT',
        CostCenterPemohon: '123asd',
        JabatanPemohon: 'Manager',
        DepartementPemohon: 'IT'
    }
    return (
        <div>
            <center>
                <h2
                    style={{ margin: '0 0 0 0', padding: '1%', color: 'green', border: '1px solid blue' }}
                >
                    Status: Diterima
                </h2>
            </center>
            <h2>Data Submitted</h2>
            <Paper
                style={{ padding: '1%', margin: '1% 0 2% 0' }}
            >
                <h3>
                    General Setting
                </h3>
                <h4>Di Iklankan?</h4>
                <Switch
                    checked={Data.Diiklankan}
                />
                <h3>
                    Informasi posisi
                </h3>
                <TextField
                    style={st_textfield}
                    variant='outlined'
                    InputProps={{ readOnly: true, }}
                    type='text'
                    label='Nama Posisi'
                    name='UserName'
                    value={Data?.NamaPosisi ? Data.NamaPosisi : ''
                    }
                />
                <TextField
                    style={{ ...st_textfield, ...st_Half }}
                    variant='outlined'
                    InputProps={{ readOnly: true, }}
                    type='text'
                    label='Level '
                    name='UserName'
                    value={Data?.Level ? Data.Level : ''
                    }
                />
                <TextField
                    style={{ ...st_textfield, ...st_Half, marginLeft: '5%' }}
                    variant='outlined'
                    InputProps={{ readOnly: true, }}
                    type='text'
                    label='Cost Center'
                    name='UserName'
                    value={Data?.CostCenter ? Data.CostCenter : ''
                    }
                />
                <TextField
                    style={st_textfield}
                    variant='outlined'
                    InputProps={{ readOnly: true, }}
                    type='text'
                    label='Melapor Kepada'
                    name='UserName'
                    value={Data?.Melapor ? Data.Melapor : ''
                    }
                />
                <TextField
                    style={st_textfield}
                    variant='outlined'
                    InputProps={{ readOnly: true, }}
                    type='text'
                    label='Tipe Kepegawaian'
                    name='UserName'
                    value={Data?.TipeKepegawaian ? Data.TipeKepegawaian : ''
                    }
                />
                <TextField
                    style={{ ...st_textfield, ...st_Half }}
                    variant='outlined'
                    InputProps={{ readOnly: true, }}
                    type='text'
                    label='Jumlah Bawahan'
                    name='UserName'
                    value={Data?.JumlahBawahan ? Data.JumlahBawahan : ''
                    }
                />
                <TextField
                    style={{ ...st_textfield, ...st_Half, marginLeft: '5%' }}
                    variant='outlined'
                    InputProps={{ readOnly: true, }}
                    type='text'
                    label='Posisi Dibutuhkan'
                    name='UserName'
                    value={Data?.PosisiDibutuhkan ? Data.PosisiDibutuhkan : ''
                    }
                />
                <TextField
                    style={{ ...st_textfield, ...st_Half }}
                    variant='outlined'
                    InputProps={{ readOnly: true, }}
                    type='text'
                    label='Lokasi Kerja'
                    name='UserName'
                    value={Data?.Lokasi ? Data.Lokasi : ''
                    }
                />
                <TextField
                    style={{ ...st_textfield, ...st_Half, marginLeft: '5%' }}
                    variant='outlined'
                    InputProps={{ readOnly: true, }}
                    type='text'
                    label='Baru atau Menggantikan'
                    name='UserName'
                    value={Data?.New ? Data.New : ''
                    }
                />
                <TextField
                    style={st_textfield}
                    variant='outlined'
                    InputProps={{ readOnly: true, }}
                    type='text'
                    label='Peralatan'
                    name='UserName'
                    value={Data?.Peralatan ? Data.Peralatan : ''
                    }
                />
                <h3>
                    Uraian Pekerjaan
                </h3>
                <TextField
                    style={st_textfield}
                    variant='outlined'
                    InputProps={{ readOnly: true, }}
                    type='text'
                    label='Uraian Pekerjaan'
                    name='UserName'
                    value={Data?.Uraian ? Data.Uraian : ''
                    }
                />
                <h3>
                    Persyaratan Posisi
                </h3>
                <TextField
                    style={{ ...st_textfield, ...st_Half }}
                    variant='outlined'
                    InputProps={{ readOnly: true, }}
                    type='text'
                    label='Usia Min'
                    name='UserName'
                    value={Data?.UsiaMin ? Data.UsiaMin : ''
                    }
                />
                <TextField
                    style={{ ...st_textfield, ...st_Half, marginLeft: '5%' }}
                    variant='outlined'
                    InputProps={{ readOnly: true, }}
                    type='text'
                    label='UsiaMax'
                    name='UserName'
                    value={Data?.UsiaMax ? Data.UsiaMax : ''
                    }
                />
                <TextField
                    style={st_textfield}
                    variant='outlined'
                    InputProps={{ readOnly: true, }}
                    type='text'
                    label='JenisKelamin'
                    name='UserName'
                    value={Data?.JenisKelamin ? Data.JenisKelamin : ''
                    }
                />
                <TextField
                    style={{ ...st_textfield, ...st_Half }}
                    variant='outlined'
                    InputProps={{ readOnly: true, }}
                    type='text'
                    label='Pendidikan'
                    name='UserName'
                    value={Data?.Pendidikan ? Data.Pendidikan : ''
                    }
                />
                <TextField
                    style={{ ...st_textfield, ...st_Half, marginLeft: '5%' }}
                    variant='outlined'
                    InputProps={{ readOnly: true, }}
                    type='text'
                    label='Jurusan'
                    name='UserName'
                    value={Data?.Jurusan ? Data.Jurusan : ''
                    }
                />
                <TextField
                    style={st_textfield}
                    variant='outlined'
                    InputProps={{ readOnly: true, }}
                    type='text'
                    label='Bahasa'
                    name='UserName'
                    value={Data?.Bahasa ? Data.Bahasa : ''
                    }
                />
                <TextField
                    style={st_textfield}
                    variant='outlined'
                    InputProps={{ readOnly: true, }}
                    type='text'
                    label='Pengalaman (Tahun)'
                    name='UserName'
                    value={Data?.Pengalaman ? Data.Pengalaman : ''
                    }
                />
                <TextField
                    style={st_textfield}
                    variant='outlined'
                    InputProps={{ readOnly: true, }}
                    type='text'
                    label='Catatan'
                    name='UserName'
                    value={Data?.Catatan ? Data.Catatan : ''
                    }
                />
                <h3>
                    Data Pemohon
                </h3>
                <TextField
                    style={st_textfield}
                    variant='outlined'
                    InputProps={{ readOnly: true, }}
                    type='text'
                    label='Nama Pemohon'
                    name='UserName'
                    value={Data?.NamaPemohon ? Data.NamaPemohon : ''
                    }
                />
                <TextField
                    style={st_textfield}
                    variant='outlined'
                    InputProps={{ readOnly: true, }}
                    type='text'
                    label='Divisi Pemohon'
                    name='UserName'
                    value={Data?.DivisiPemohon ? Data.DivisiPemohon : ''
                    }
                />
                <TextField
                    style={st_textfield}
                    variant='outlined'
                    InputProps={{ readOnly: true, }}
                    type='text'
                    label='Cost Center Pemohon'
                    name='UserName'
                    value={Data?.CostCenterPemohon ? Data.CostCenterPemohon : ''
                    }
                />
                <TextField
                    style={st_textfield}
                    variant='outlined'
                    InputProps={{ readOnly: true, }}
                    type='text'
                    label='Jabatan Pemohon'
                    name='UserName'
                    value={Data?.JabatanPemohon ? Data.JabatanPemohon : ''
                    }
                />
                <TextField
                    style={st_textfield}
                    variant='outlined'
                    InputProps={{ readOnly: true, }}
                    type='text'
                    label='Departement Pemohon'
                    name='UserName'
                    value={Data?.DepartementPemohon ? Data.DepartementPemohon : ''
                    }
                />
            </Paper>
            <h2>
                Action:
            </h2>
            <FormControl style={st_textfield} variant="filled" required readOnly disabled >
                <InputLabel shrink >Jenis</InputLabel>
                <Select native onChange={(e) => SelectFormOnChange(e)} label="Jenis" name='Jenis' value={Jenis} labelWidth={100} >
                    <option value="" disabled> -- select an option -- </option>
                    {['Menunggu', 'Diterima', 'Ditolak'].map((option, index) =>
                        <option key={index} value={option}>{option}</option>
                    )}
                </Select>
            </FormControl>
            <TextField
                style={st_textfield}
                variant='outlined'
                InputProps={{ required: true, readOnly: true }}
                type='text'
                label='Keterangan'
                name='UserName'
                value={Keterangan}
                onChange={FormOnChange}
                disabled
            />
        </div >
    )
}

export default PengajuanDiterima
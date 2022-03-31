import React from "react"

import { Container, Grid, TextField, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material'
import * as Style from '../../Style'

class MocDaftar extends React.Component {
    render() {
        const Judul = 'Operations - ShopeePayLater, Desk Collection Team Leader'
        const LabelStyle = { fontWeight: 'bold', fontSize: '120%' }
        const SecLabelStyle = { fontSize: '80%', color: Style.Color.Text.secondary }
        const Imp = { color: 'red' }
        const FullTextInp = { width: '100%', margin: '10px 5px 15px 5px' }
        const HalfextInp = { ...FullTextInp, ...{ width: '44%' } }
        const GridStyle = { border: '0px solid red', width: '48%' }
        const UploadBox = { padding: '1% 1% 1% 1%', border: `0px solid ${Style.Color.Text.secondary}` }
        const ButtonUpload = { borderRadius: '18px', fontSize: '16px' }
        const handleButton = () => {
            window.location.href = '/mocjoblist'
        }
        return (
            <Container>
                <div
                    style={{ border: '0px solid red', textAlign: 'center', padding: '10px 10px 20px 10px' }}
                >
                    <h1>{Judul} </h1>
                </div>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"

                >

                    <div
                        style={GridStyle}
                    >
                        <label
                            style={LabelStyle}
                        >
                            Nama Depan
                            <label
                                style={Imp}
                            >
                                *
                            </label>
                        </label><br />
                        <TextField style={FullTextInp} variant='outlined' required={true} placeholder="Contoh: Khairul" name="NamaDepan" /><br />
                        <label
                            style={LabelStyle}
                        >
                            Email
                            <label
                                style={Imp}
                            >
                                *
                            </label>
                        </label><br />
                        <TextField style={FullTextInp} variant='outlined' required={true} placeholder="Contoh: khairul.nasution@gmail.com" name="Email" type="email" /><br />
                        <label
                            style={LabelStyle}
                        >
                            Lokasi Saya
                            <label
                                style={Imp}
                            >
                                *
                            </label>
                        </label><br />
                        <TextField style={FullTextInp} variant='outlined' required={true} placeholder="Contoh: Bekasi" name="Lokasi" /><br />
                        <label
                            style={LabelStyle}
                        >
                            Pendidikan
                            <label
                                style={Imp}
                            >
                                *
                            </label>
                        </label><br />
                        <TextField style={FullTextInp} variant='outlined' required={true} placeholder="Contoh: Universitas Indonesia" name="Pendidikan" /><br />
                        <label
                            style={LabelStyle}
                        >
                            Indeks Prestasi Kumulatif (IPK)
                            <label
                                style={Imp}
                            >
                                *
                            </label>
                        </label><br />
                        <TextField style={FullTextInp} variant='outlined' required={true} placeholder="Contoh: 3.2" name="IPK" /><br />
                        <label
                            style={LabelStyle}
                        >
                            Tahun Masuk Sekolah
                            <label
                                style={Imp}
                            >
                                *
                            </label>
                        </label><br />
                        <TextField style={HalfextInp} variant='outlined' required={true} placeholder="MM" name="TahunMasukSekolahMM" />
                        {/* <FormControl style={HalfextInp} variant="outlined" required >
                            <InputLabel shrink >Kepemilikan</InputLabel>
                            <Select native name='TahunMasukSekolahMM'>
                                <option value="" disabled> -- select an option -- </option>
                                {Bulan.map((item, index) =>
                                    <option key={index} value={item}>{item}</option>
                                )}
                            </Select>
                        </FormControl> */}
                        {/* <div
                                style={{ width: '8%', display: 'inline-block', border: '1px solid #ccc', margin: '7% 0 0 0' }}
                            >

                            </div> */}
                        <TextField style={HalfextInp} variant='outlined' required={true} placeholder="YYYY" name="TahunMasukSekolahYYYY" /><br />
                        <label
                            style={LabelStyle}
                        >
                            Bagaimana Anda Mendengar Tentang Kami?
                            <label
                                style={Imp}
                            >
                                *
                            </label>
                        </label><br />
                        <TextField style={FullTextInp} variant='outlined' required={true} placeholder="Contoh: Khairul" name="Referensi" /><br />
                    </div>
                    <div
                        style={GridStyle}
                    >
                        <label
                            style={LabelStyle}
                        >
                            Nama Belakang
                            <label
                                style={Imp}
                            >
                                *
                            </label>
                        </label><br />
                        <TextField style={FullTextInp} variant='outlined' required={true} placeholder="Contoh: Nasution" name="NamaBelakang" /><br />
                        <label
                            style={LabelStyle}
                        >
                            Nomor Kontak
                            <label
                                style={Imp}
                            >
                                *
                            </label>
                        </label><br />
                        <TextField style={FullTextInp} variant='outlined' required={true} placeholder="Contoh: 021989232" name="Kontak" /><br />
                        <label
                            style={LabelStyle}
                        >
                            Pendidikan Terakhir
                            <label
                                style={Imp}
                            >
                                *
                            </label>
                        </label><br />
                        <TextField style={FullTextInp} variant='outlined' required={true} placeholder="Contoh: SMA" name="PendidikanTerakhir" /><br />
                        {/* <FormControl style={FullTextInp} variant="outlined" required >
                            <Select native name='PendidikanTerakhir' value={DefaultZero ? null : 'Contoh: SMA'}>
                                <option value="" disabled> -- select an option -- </option>
                                {TingkatPendidikan.map((item, index) =>
                                    <option key={index} value={item}>{item}</option>
                                )}
                            </Select>
                        </FormControl> */}
                        <label
                            style={LabelStyle}
                        >
                            Jurusan Studi
                            <label
                                style={Imp}
                            >
                                *
                            </label>
                        </label><br />
                        <TextField style={FullTextInp} variant='outlined' required={true} placeholder="Contoh: Teknik Informatika" name="JurusanStudi" /><br />
                        <label
                            style={LabelStyle}
                        >
                            Periode Ketersediaan (Hanya Untuk Program Magang)
                        </label><br />
                        <TextField style={FullTextInp} variant='outlined' type={'date'} required={false} placeholder="" name="Magang" /><br />
                        <label
                            style={LabelStyle}
                        >
                            Tahun Kelulusan
                            <label
                                style={Imp}
                            >
                                *
                            </label>
                        </label><br />
                        <TextField style={HalfextInp} variant='outlined' required={true} placeholder="MM" name="TahunKelulusanMM" />
                        <TextField style={HalfextInp} variant='outlined' required={true} placeholder="YYYY" name="TahunKelulusanYYYY" /><br />
                        <label
                            style={LabelStyle}
                        >
                            URL Situs (Opsional)
                        </label><br />
                        <TextField style={FullTextInp} variant='outlined' required={true} placeholder="Contoh: https://github.com/hudhanst/hudhanst.github.io" name="URL" /><br />
                    </div>
                </Grid>
                <div
                    style={UploadBox}
                >
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <div>
                            <p
                                style={LabelStyle}
                            >
                                Resume (Maksimal 2MB)
                                <label
                                    style={Imp}
                                >
                                    *
                                </label>
                            </p>
                            <label
                                style={SecLabelStyle}
                            >
                                (.Doc, .Docx, .Pdf)
                            </label>
                        </div>
                        <div>
                            <Button
                                color="primary"
                                variant="outlined"
                                style={ButtonUpload}
                            >Unggah</Button>
                        </div>
                    </Grid>
                </div >
                <div
                    style={UploadBox}
                >
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <div>
                            <p
                                style={LabelStyle}
                            >
                                Maksimal (2MB Max)
                                <label
                                    style={Imp}
                                >
                                    *
                                </label>
                            </p>
                            <label
                                style={SecLabelStyle}
                            >
                                (.Doc, .Docx, .Pdf)
                            </label>
                        </div>
                        <div>
                            <Button
                                color="primary"
                                variant="outlined"
                                style={ButtonUpload}
                            >Unggah</Button>
                        </div>
                    </Grid>
                </div >
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Saya setuju dengan Persyaratan Layanan | Kebijakan Privasi." />
                </FormGroup>

                <center>

                    <Button
                        onClick={handleButton}
                        style={{ padding: '1%', width: '20%', borderRadius: '18px', margin: '5% 0 5% 0' }}
                        color="primary"
                        variant="contained"
                        size="large"
                    >
                        Kirim
                    </Button>
                </center>

            </Container >
        )
    }
}

export default MocDaftar
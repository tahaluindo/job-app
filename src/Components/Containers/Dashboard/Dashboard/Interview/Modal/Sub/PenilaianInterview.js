import React from 'react'

import { TextField, Rating, FormControl, InputLabel, Select, Button} from '@mui/material'

class DetailPosisi extends React.Component {
    state = {
        InterviewDate: null,
        LatarBelakangPendidikan: 0,
        AreaTerkait: 0,
        PengalamanKerja: 0,
        Ingris: 0,
        Lokasi: 0,
        Attributes: 0,
        Komunikasi: 0,
        Penampilan: 0,
        Temprament: 0,
        Sikap: 0,
        Kematangan: 0,
        AspirasiKarir: 0,
        KepercayaanDiri: 0,
        Kecerdasan: 0,
        Prestasi: 0,
        Pengembangan: 0,
        Evaluasi: 0,
        KeputusanHasil: '',
    }
    onChangeField = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    SelectFormOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const {
            InterviewDate,
            LatarBelakangPendidikan,
            AreaTerkait,
            PengalamanKerja,
            Ingris,
            Lokasi,
            Attributes,
            Komunikasi,
            Penampilan,
            Temprament,
            Sikap,
            Kematangan,
            AspirasiKarir,
            KepercayaanDiri,
            Kecerdasan,
            Prestasi,
            Pengembangan,
            Evaluasi,
            KeputusanHasil
        } = this.state
        const st_textfield = { marginTop: '10px', marginBottom: '10px', width: '100%' }
        const st_halftextfield = { ...st_textfield, width: '50%' }
        const st_ReviewItem = { margin: '1% 0 1% 0', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }
        const st_TidakPuas = { marginRight: '5%' }
        const st_Reting = { fontSize: '30px' }
        const st_Puas = { marginLeft: '5%' }

        return (
            <div>
                <h3>
                    Nama Pelamar: Ibnu
                </h3>
                <h3>
                    Posisi: Pilot
                </h3>
                <TextField
                    style={st_halftextfield}
                    variant='outlined'
                    onChange={this.onChangeField}
                    type='datetime-local'
                    label='Tanggal Interview'
                    name='InterviewDate'
                    value={InterviewDate}
                    InputLabelProps={{ shrink: true }}
                /><br />
                <h2>
                    Form Penilaian
                </h2>
                <div>
                    <label>
                        Kesesuaian Latar Belakang Pendidikan dengan Posisi yang Diambil
                    </label>
                    <br />
                    <div
                        style={st_ReviewItem}
                    >
                        <span
                            style={st_TidakPuas}
                        >
                            Tidak Puas
                        </span>
                        <Rating
                            style={st_Reting}
                            onChange={this.onChangeField}
                            name="LatarBelakangPendidikan"
                            value={LatarBelakangPendidikan}
                            defaultValue={0}
                            max={10}
                        />
                        <span
                            style={st_Puas}
                        >
                            Puas
                        </span>
                    </div>
                </div>
                <div>
                    <label>
                        Pengetahuan di area terkait
                    </label>
                    <br />
                    <div
                        style={st_ReviewItem}
                    >
                        <span
                            style={st_TidakPuas}
                        >
                            Tidak Puas
                        </span>
                        <Rating
                            style={st_Reting}
                            onChange={this.onChangeField}
                            name="AreaTerkait"
                            value={AreaTerkait}
                            defaultValue={0}
                            max={10}
                        />
                        <span
                            style={st_Puas}
                        >
                            Puas
                        </span>
                    </div>
                </div>
                <div>
                    <label>
                        Pengalaman Kerja
                    </label>
                    <br />
                    <div
                        style={st_ReviewItem}
                    >
                        <span
                            style={st_TidakPuas}
                        >
                            Tidak Puas
                        </span>
                        <Rating
                            style={st_Reting}
                            onChange={this.onChangeField}
                            name="PengalamanKerja"
                            value={PengalamanKerja}
                            defaultValue={0}
                            max={10}
                        />
                        <span
                            style={st_Puas}
                        >
                            Puas
                        </span>
                    </div>
                </div>
                <div>
                    <label>
                        Ingris
                    </label>
                    <br />
                    <div
                        style={st_ReviewItem}
                    >
                        <span
                            style={st_TidakPuas}
                        >
                            Tidak Puas
                        </span>
                        <Rating
                            style={st_Reting}
                            onChange={this.onChangeField}
                            name="Ingris"
                            value={Ingris}
                            defaultValue={0}
                            max={10}
                        />
                        <span
                            style={st_Puas}
                        >
                            Puas
                        </span>
                    </div>
                </div>
                <div>
                    <label>
                        Reaksi terhadap Lokasi
                    </label>
                    <br />
                    <div
                        style={st_ReviewItem}
                    >
                        <span
                            style={st_TidakPuas}
                        >
                            Tidak Puas
                        </span>
                        <Rating
                            style={st_Reting}
                            onChange={this.onChangeField}
                            name="Lokasi"
                            value={Lokasi}
                            defaultValue={0}
                            max={10}
                        />
                        <span
                            style={st_Puas}
                        >
                            Puas
                        </span>
                    </div>
                </div>
                <div>
                    <label>
                        Personal Attributes
                    </label>
                    <br />
                    <div
                        style={st_ReviewItem}
                    >
                        <span
                            style={st_TidakPuas}
                        >
                            Tidak Puas
                        </span>
                        <Rating
                            style={st_Reting}
                            onChange={this.onChangeField}
                            name="Attributes"
                            value={Attributes}
                            defaultValue={0}
                            max={10}
                        />
                        <span
                            style={st_Puas}
                        >
                            Puas
                        </span>
                    </div>
                </div>
                <div>
                    <label>
                        Kemampuan Komunikasi
                    </label>
                    <br />
                    <div
                        style={st_ReviewItem}
                    >
                        <span
                            style={st_TidakPuas}
                        >
                            Tidak Puas
                        </span>
                        <Rating
                            style={st_Reting}
                            onChange={this.onChangeField}
                            name="Komunikasi"
                            value={Komunikasi}
                            defaultValue={0}
                            max={10}
                        />
                        <span
                            style={st_Puas}
                        >
                            Puas
                        </span>
                    </div>
                </div>
                <div>
                    <label>
                        Penampilan
                    </label>
                    <br />
                    <div
                        style={st_ReviewItem}
                    >
                        <span
                            style={st_TidakPuas}
                        >
                            Tidak Puas
                        </span>
                        <Rating
                            style={st_Reting}
                            onChange={this.onChangeField}
                            name="Penampilan"
                            value={Penampilan}
                            defaultValue={0}
                            max={10}
                        />
                        <span
                            style={st_Puas}
                        >
                            Puas
                        </span>
                    </div>
                </div>
                <div>
                    <label>
                        Temprament
                    </label>
                    <br />
                    <div
                        style={st_ReviewItem}
                    >
                        <span
                            style={st_TidakPuas}
                        >
                            Tidak Puas
                        </span>
                        <Rating
                            style={st_Reting}
                            onChange={this.onChangeField}
                            name="Temprament"
                            value={Temprament}
                            defaultValue={0}
                            max={10}
                        />
                        <span
                            style={st_Puas}
                        >
                            Puas
                        </span>
                    </div>
                </div>
                <div>
                    <label>
                        Sikap
                    </label>
                    <br />
                    <div
                        style={st_ReviewItem}
                    >
                        <span
                            style={st_TidakPuas}
                        >
                            Tidak Puas
                        </span>
                        <Rating
                            style={st_Reting}
                            onChange={this.onChangeField}
                            name="Sikap"
                            value={Sikap}
                            defaultValue={0}
                            max={10}
                        />
                        <span
                            style={st_Puas}
                        >
                            Puas
                        </span>
                    </div>
                </div>
                <div>
                    <label>
                        Kematangan
                    </label>
                    <br />
                    <div
                        style={st_ReviewItem}
                    >
                        <span
                            style={st_TidakPuas}
                        >
                            Tidak Puas
                        </span>
                        <Rating
                            style={st_Reting}
                            onChange={this.onChangeField}
                            name="Kematangan"
                            value={Kematangan}
                            defaultValue={0}
                            max={10}
                        />
                        <span
                            style={st_Puas}
                        >
                            Puas
                        </span>
                    </div>
                </div>
                <div>
                    <label>
                        Aspirasi Karir
                    </label>
                    <br />
                    <div
                        style={st_ReviewItem}
                    >
                        <span
                            style={st_TidakPuas}
                        >
                            Tidak Puas
                        </span>
                        <Rating
                            style={st_Reting}
                            onChange={this.onChangeField}
                            name="AspirasiKarir"
                            value={AspirasiKarir}
                            defaultValue={0}
                            max={10}
                        />
                        <span
                            style={st_Puas}
                        >
                            Puas
                        </span>
                    </div>
                </div>
                <div>
                    <label>
                        Kepercayaan Diri
                    </label>
                    <br />
                    <div
                        style={st_ReviewItem}
                    >
                        <span
                            style={st_TidakPuas}
                        >
                            Tidak Puas
                        </span>
                        <Rating
                            style={st_Reting}
                            onChange={this.onChangeField}
                            name="KepercayaanDiri"
                            value={KepercayaanDiri}
                            defaultValue={0}
                            max={10}
                        />
                        <span
                            style={st_Puas}
                        >
                            Puas
                        </span>
                    </div>
                </div>
                <div>
                    <label>
                        Kecerdasan
                    </label>
                    <br />
                    <div
                        style={st_ReviewItem}
                    >
                        <span
                            style={st_TidakPuas}
                        >
                            Tidak Puas
                        </span>
                        <Rating
                            style={st_Reting}
                            onChange={this.onChangeField}
                            name="Kecerdasan"
                            value={Kecerdasan}
                            defaultValue={0}
                            max={10}
                        />
                        <span
                            style={st_Puas}
                        >
                            Puas
                        </span>
                    </div>
                </div>
                <div>
                    <label>
                        Hasrat Berprestasi
                    </label>
                    <br />
                    <div
                        style={st_ReviewItem}
                    >
                        <span
                            style={st_TidakPuas}
                        >
                            Tidak Puas
                        </span>
                        <Rating
                            style={st_Reting}
                            onChange={this.onChangeField}
                            name="Prestasi"
                            value={Prestasi}
                            defaultValue={0}
                            max={10}
                        />
                        <span
                            style={st_Puas}
                        >
                            Puas
                        </span>
                    </div>
                </div>
                <div>
                    <label>
                        Kapasitas Untuk Pengembangan
                    </label>
                    <br />
                    <div
                        style={st_ReviewItem}
                    >
                        <span
                            style={st_TidakPuas}
                        >
                            Tidak Puas
                        </span>
                        <Rating
                            style={st_Reting}
                            onChange={this.onChangeField}
                            name="Pengembangan"
                            value={Pengembangan}
                            defaultValue={0}
                            max={10}
                        />
                        <span
                            style={st_Puas}
                        >
                            Puas
                        </span>
                    </div>
                </div>
                <div>
                    <label>
                        Evaluasi Keseluruhan
                    </label>
                    <br />
                    <div
                        style={st_ReviewItem}
                    >
                        <span
                            style={st_TidakPuas}
                        >
                            Tidak Puas
                        </span>
                        <Rating
                            style={st_Reting}
                            onChange={this.onChangeField}
                            name="Evaluasi"
                            value={Evaluasi}
                            defaultValue={0}
                            max={10}
                        />
                        <span
                            style={st_Puas}
                        >
                            Puas
                        </span>
                    </div>
                </div>
                <h2>
                    Keputusan Hasil Interview
                </h2>
                <FormControl style={st_textfield} variant="filled" required >
                    <InputLabel shrink >Keputusan Hasil Interview</InputLabel>
                    <Select native onChange={(e) => this.SelectFormOnChange(e)} label="Keputusan Hasil Interview" name='KeputusanHasil' value={KeputusanHasil} labelWidth={100} >
                        <option value="" disabled> -- select an option -- </option>
                        {['Diterima', 'Ditunda', 'Ditolak'].map((option, index) =>
                            <option key={index} value={option}>{option}</option>
                        )}
                    </Select>
                </FormControl>
                <center>
                    <Button
                        variant='contained'
                        style={{ width: '60%', margin: '1% 0 3% 0' }}
                    >
                        Submit
                    </Button>
                </center>
            </div>
        )
    }
}

export default DetailPosisi
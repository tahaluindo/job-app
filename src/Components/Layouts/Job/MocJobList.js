import React, { Fragment } from "react"

import { List, ListItemButton, Divider, Grid, Paper, FormGroup, FormControlLabel, Checkbox, Collapse } from '@mui/material'

import WorkIcon from '@mui/icons-material/Work'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import LocationOnIcon from '@mui/icons-material/LocationOn'

import MocSearchJob from '../../Containers/Job/MocSearchJob'
import Banner from '../../../Img/Daftar-Perusahaan-BUMN.jpg'

import * as Style from '../../../Style'

class MocJobList extends React.Component {
    render() {
        const DataCareers = [
            {
                Judul: "People - Onboarding Trainer (based in Yogyakarta)",
                Divisi: "Business Development and Partnerships",
                Tingkatan: "Junior",
                Lokasi: "Singapura"
            },
            {
                Judul: "Pekerjaan 2",
                Divisi: "Cross Border eCommerce",
                Tingkatan: "Experienced",
                Lokasi: "Indonesia - Bandung"
            }, {
                Judul: "Pekerjaan 3",
                Divisi: "Data Analytics",
                Tingkatan: "Junior",
                Lokasi: "Indonesia - Bekasi"
            },
            {
                Judul: "Pekerjaan 4",
                Divisi: "Operasi",
                Tingkatan: "Manager",
                Lokasi: "Indonesia-Jakarta"
            },
            {
                Judul: "Pekerjaan 5",
                Divisi: "Marketing",
                Tingkatan: "Junior",
                Lokasi: "Jepang - Tokyo"
            },
            {
                Judul: "Pekerjaan 6",
                Divisi: "Marketing",
                Tingkatan: "Internship",
                Lokasi: "Indonesia - Solo"
            }
        ]
        const Departemen = []
        const Tingkat = []
        const Lokasi = []
        const Query = [
            {
                Nama: 'Departemen',
                Data: Departemen
            },
            {
                Nama: 'Tingkat',
                Data: Tingkat
            },
            {
                Nama: 'Lokasi',
                Data: Lokasi
            }
        ]
        let i = 0
        let isOpen = true
        // console.log()
        while (i < DataCareers.length) {
            if (!Departemen.includes(DataCareers[i].Divisi)) {
                Departemen.push(DataCareers[i].Divisi)
            }
            if (!Tingkat.includes(DataCareers[i].Tingkatan)) {
                Tingkat.push(DataCareers[i].Tingkatan)
            }
            if (!Lokasi.includes(DataCareers[i].Lokasi)) {
                Lokasi.push(DataCareers[i].Lokasi)
            }
            i = i + 1
        }
        const handleClick = () => {
            console.log('hi')
        }
        const handleButton = () => {
            window.location.href = '/MocJobDetail'
        }
        const DetailStyledText = { border: '0px solid red', width: '15vw', alignItems: 'center', verticalAlign: 'middle', color: `${Style.Color.Text.secondary}` }
        const DetailStyledLogo = { color: Style.Color.Text.secondary, margin: '0 10px 0 0' }
        return (
            <div>
                <center>
                    <img
                        src={Banner}
                        style={{ width: '98vw', height: '45vh' }}
                        alt="foto memotifasi"
                    />
                </center>
                <MocSearchJob />

                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                >
                    <Paper
                        style={{ border: '0px solid red', width: '20vw', margin: '0 0 0 2vw', padding: '2% 1% 0 1%', boxShadow: 'none' }}
                    >
                        {Query.map((item, index) =>
                            <List
                                key={index}
                            >
                                <p
                                    style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '150%', border: '0px solid red' }}
                                    onClick={handleClick}
                                >
                                    {item.Nama}
                                </p>
                                <Collapse in={isOpen} >
                                    {item.Data.map((itemitem, indexindex) =>
                                        <div
                                            key={`${index}-${indexindex}`}
                                        >
                                            <FormGroup>
                                                <FormControlLabel style={{ padding: '0px 0px 0px 2%' }} control={<Checkbox defaultChecked />} label={itemitem} />
                                            </FormGroup>
                                        </div>
                                    )}
                                </Collapse>
                            </List>
                        )}
                    </Paper>
                    <Paper
                        style={{ border: '0px solid red', width: '60vw', padding: '2% 1% 0 1%', margin: '0 5vw 0 0', boxShadow: 'none' }}
                    >
                        <h1
                            style={{ fontWeight: 'bold', fontSize: '200%' }}
                        >
                            Posisi Tersedia
                        </h1>
                        {DataCareers.length > 0 ?
                            (<List>
                                <Divider />
                                {DataCareers.map((item, index) => (
                                    <Fragment key={index}>
                                        <ListItemButton
                                            onClick={handleButton}
                                        >
                                            <Grid
                                                container
                                                direction="column"
                                                justifyContent="flex-start"
                                                alignItems="flex-start"
                                            >
                                                <div>
                                                    <p
                                                        style={{ fontSize: '150%', fontWeight: 'inherit' }}
                                                    >
                                                        {item.Judul}
                                                    </p>
                                                </div>

                                                <Grid
                                                    container
                                                    direction="row"
                                                    justifyContent="flex-start"
                                                    alignItems="center"
                                                >
                                                    <WorkIcon
                                                        style={DetailStyledLogo}
                                                    />
                                                    <div
                                                        style={DetailStyledText}
                                                    >
                                                        {item.Divisi}
                                                    </div>
                                                    <SignalCellularAltIcon
                                                        style={DetailStyledLogo}
                                                    />
                                                    <div
                                                        style={DetailStyledText}
                                                    >
                                                        {item.Tingkatan}
                                                    </div>
                                                    <LocationOnIcon
                                                        style={DetailStyledLogo}
                                                    />
                                                    <div
                                                        style={DetailStyledText}
                                                    >
                                                        {item.Lokasi}
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </ListItemButton>
                                        <Divider />
                                    </Fragment>
                                ))}
                            </List>) : (<h1>kesalahan data</h1>)}
                    </Paper>
                </Grid>


            </div >
        )
    }
}

export default MocJobList
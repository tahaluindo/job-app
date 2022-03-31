import React, { Fragment } from 'react'

import {  Grid, Paper } from '@mui/material'

import * as Style from '../../../../../../../../Style'


const JobView = () => {
    const Judul = "Operations - ShopeePayLater, Desk Collection Team Leader"
    const Detail = {
        Departemen: "Operations", Tingkat: "Manager", Lokasi: "Indonesia - Jakarta"
    }
    const About = "Tim Operasional mencakup proses dari awal hingga akhir, mulai dari saat Pembeli mencari produk di Shopee, hingga saat Pembeli menerima produk. Tim ini menganalisis & memantau Indikator Kinerja Utama & melakukan analisis jika performa operasional mengalami fluktuasi. Tim ini terdiri dari Customer Service, Pembayaran, Listings, Warehouse, Pengiriman, Operasional Penjual, dan Fraud."
    const Deskripsi = [
        "Lead a team and monitor team's performance to ensure all standards and targets are met",
        "Responsible for overall team operational activities from briefing to debriefing",
        "Manage overall team performance standard and compliance",
        "Liaise with trainer, supervisor, and management to increase collection rate of SPL late users",
        "Perform meeting with management team to cover performance result and solution/action items"
    ]
    const Persyaratan = [
        "Candidate must have minimum. Bachelor's Degree from any major",
        "Candidate must have at least 2-years leadership experience as Collection Team Leader from reputable conventional/digital collection company",
        "Excellent written and verbal communication skills in English and Bahasa Indonesia to communicate with internal stakeholders",
        "Strong skills in Problem-solving, Team Management, and Leadership",
        "Preferably have active AFPI (collection) license/certificate"
    ]
    return (
        <Fragment>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <div
                    style={{ border: '0px solid red', width: '60vw', padding: '1px' }}
                >
                    <h1>{Judul} </h1>
                </div>
                <div
                // style={{ border: '0px solid red', width: '20vw' }}
                >
                </div>
            </Grid>
            <Paper
                style={{ border: '0 px solid red', boxShadow: 'none', backgroundColor: "rgb(249, 249, 249)", padding: '10px 0px 10px 50px' }}
            >
                <p>
                    {`Departemen  ${Detail.Departemen}  |  Tingkat  ${Detail.Tingkat}  |  Lokasi  ${Detail.Lokasi}`}
                </p>
            </Paper>
            <p
                style={{ textAlign: 'center', fontSize: '18px', color: Style.Color.Text.secondary }}
            >{About}</p>
            <h2>Deskripsi Pekerjaan:</h2>
            <ul>
                {Deskripsi.map((item, index) => (
                    <li
                        key={(`Deskripsi ${index}`)}
                        style={{ color: Style.Color.Text.secondary }}
                    >
                        <p>
                            {item}
                        </p>
                    </li>
                ))}
            </ul>
            <h2>Persyaratan:</h2>
            <ul>
                {Persyaratan.map((item, index) => (
                    <li
                        key={(`Persyaratan ${index}`)}
                        style={{ color: Style.Color.Text.secondary }}
                    >
                        <p>
                            {item}
                        </p>
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}

export default JobView
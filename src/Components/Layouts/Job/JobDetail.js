import React from "react"

import { connect } from 'react-redux'

import { Navigate } from 'react-router-dom'

import { Container, Button, Grid, Paper } from '@mui/material'
import * as Style from '../../../Style'

import FavoriteIcon from '@mui/icons-material/Favorite'

class JobDetail extends React.Component {
    state = {
        isGoToLogin: false,
        isGoToDaftarKerja: false
    }
    goToLogin = () => {
        this.setState({ isGoToLogin: true })
    }
    goToDaftarKerja = () => {
        this.setState({ isGoToDaftarKerja: true })
    }
    render() {
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
        // const handleButton = () => {
        //     window.location.href = '/Daftar'
        // }
        const {
            isGoToLogin,
            isGoToDaftarKerja
        } = this.state
        const isAuth = this.props.isAuth
        const Token = this.props.Token
        return (
            <Container>
                {isGoToLogin ? <Navigate to="/login" replace={true} /> : <div></div>}
                {isGoToDaftarKerja ? <Navigate to="/daftarkerja" replace={true} /> : <div></div>}
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
                        <Button
                            variant={this.props.Save ? "contained" : "outlined"}
                            color="primary"
                            // onClick={handleButton}
                            style={{ padding: '5%', borderRadius: '8px', fontSize: "16px", width: '10vw' }}
                        // style={{ border: '0px solid red', padding: '5%', borderRadius: '8px', fontSize: "16px", }}
                        >
                            <FavoriteIcon
                                style={{ margin: '0 5% 0 0' }}
                            /> {this.props.Save ? "Unsave" : "Save"}
                        </Button>
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
                <center>
                    <Button
                        variant={this.props.Apply ? "outlined" : isAuth && Token ? "outlined" : "contained"}
                        color={this.props.Apply ? 'success' : "primary"}
                        style={{ padding: '1%', margin: '2% 0 5% 0', width: '60%', borderRadius: '10px', textTransform: 'none' }}
                        onClick={
                            this.props.Apply ? console.log("Application being reviewed")
                                : isAuth && Token ? this.goToDaftarKerja
                                    : this.goToLogin
                        }
                    >
                        {this.props.Apply ? 'Application being reviewed' : isAuth && Token ? "Daftar" : "Log In"}
                    </Button>
                </center>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    isAuth: state.Auth.isAuth,
    Token: state.Auth.Token,
})

export default connect(mapStateToProps, {})(JobDetail)
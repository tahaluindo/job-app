import React from 'react'

import { connect } from 'react-redux'
import { GetAccountData, GetBiodataData, GetPendidikanData, GetKeterampilanData, GetKeluargaData, GetRiwayatKerjaData, GetPertanyaanData } from '../../../Store/Actions/Account.Action'

import { Container, Tabs, Tab } from '@mui/material'

import Biodata from '../../Containers/Account/Biodata'
import Account from '../../Containers/Account/Account'
import Pendidikan from '../../Containers/Account/Pendidikan'
import Keterampilan from '../../Containers/Account/Keterampilan'
import Keluarga from '../../Containers/Account/Keluarga'
import RiwayatKerja from '../../Containers/Account/RiwayatKerja'
import FormPertanyaan from '../../Containers/Account/FormPertanyaan'
import Riwayat from '../../Containers/Account/Riwayat'

class Profile extends React.Component {
    componentDidMount() {
        this.props.GetAccountData()
        this.props.GetBiodataData()
        this.props.GetPendidikanData()
        this.props.GetKeterampilanData()
        this.props.GetKeluargaData()
        this.props.GetRiwayatKerjaData()
        this.props.GetPertanyaanData()
    }
    state = {
        TabValue: 0
    }
    handleTabChange = (e, newTabValue) => {
        this.setState({ TabValue: newTabValue })
    }

    render() {
        const Auth = this.props.Auth
        const User = Auth?.User ? Auth.User : null
        const Role = User?.Role ? User.Role : null

        const TabData = [
            {
                TabLabel: 'Biodata',
                User: ['Admin', 'User', 'HeadDepartemen', 'Departemen', 'HeadHR', 'HR'],
                TabPanel: <Biodata
                    Data={this.props.BiodataData}
                    DisableEdit={this.props.DisableEdit}
                />
            },
            {
                TabLabel: 'Account',
                User: ['Admin', 'User', 'HeadDepartemen', 'Departemen', 'HeadHR', 'HR'],
                TabPanel: <Account
                    Data={this.props.AccountData}
                    DisableEdit={this.props.DisableEdit}
                />
            },
            {
                TabLabel: 'Pendidikan',
                User: ['Admin', 'User', 'HeadDepartemen', 'Departemen', 'HeadHR', 'HR'],
                TabPanel: <Pendidikan
                    Data={this.props.PendidikanData}
                    DisableEdit={this.props.DisableEdit}
                />
            },
            {
                TabLabel: 'Keterampilan',
                User: ['Admin', 'User', 'HeadDepartemen', 'Departemen', 'HeadHR', 'HR'],
                TabPanel: <Keterampilan
                    Data={this.props.KeterampilanData}
                    DisableEdit={this.props.DisableEdit}
                />
            },
            {
                TabLabel: 'Keluarga',
                User: ['Admin', 'User', 'HeadDepartemen', 'Departemen', 'HeadHR', 'HR'],
                TabPanel: <Keluarga
                    Data={this.props.KeluargaData}
                    DisableEdit={this.props.DisableEdit}
                />
            },
            {
                TabLabel: 'Riwayat Kerja',
                User: ['Admin', 'User', 'HeadDepartemen', 'Departemen', 'HeadHR', 'HR'],
                TabPanel:
                    <RiwayatKerja Data={this.props.RiwayatKerjaData}
                        DisableEdit={this.props.DisableEdit}
                    />
            },
            {
                TabLabel: 'FormPertanyaan',
                User: ['Admin', 'User', 'HeadDepartemen', 'Departemen', 'HeadHR', 'HR'],
                TabPanel: <FormPertanyaan
                    Data={this.props.PertanyaanData}
                    DisableEdit={this.props.DisableEdit}
                />
            },
            {
                TabLabel: 'Riwayat',
                User: ['Admin', 'HeadDepartemen', 'Departemen', 'HeadHR', 'HR'],
                TabPanel: <Riwayat
                />
            },
        ]

        const Data = Role === 'User' ? TabData.slice(0,7) : TabData

        const {
            TabValue
        } = this.state
        return (
            <Container>
                <Tabs
                    value={TabValue}
                    onChange={this.handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant={TabData.length > 6 ? "scrollable" : null}
                    scrollButtons="auto"
                // centered={TabData.length > 6 ? false : true}
                >
                    {Data.map((item, index) => (
                        <Tab key={`Tabs${index}`} label={item.TabLabel} />
                    ))}
                </Tabs>
                <div
                    style={{ margin: '5% 0 5% 0' }}
                >
                    {TabValue === 0 ? TabData[TabValue].TabPanel : null}
                    {TabValue === 1 ? TabData[TabValue].TabPanel : null}
                    {TabValue === 2 ? TabData[TabValue].TabPanel : null}
                    {TabValue === 3 ? TabData[TabValue].TabPanel : null}
                    {TabValue === 4 ? TabData[TabValue].TabPanel : null}
                    {TabValue === 5 ? TabData[TabValue].TabPanel : null}
                    {TabValue === 6 ? TabData[TabValue].TabPanel : null}
                    {TabValue === 7 ? TabData[TabValue].TabPanel : null}
                </div>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    Auth: state.Auth,
    AccountData: state.Account.Account,
    BiodataData: state.Account.Biodata,
    PendidikanData: state.Account.Pendidikan,
    KeterampilanData: state.Account.Keterampilan,
    KeluargaData: state.Account.Keluarga,
    RiwayatKerjaData: state.Account.RiwayatKerja,
    PertanyaanData: state.Account.Pertanyaan,
})

export default connect(mapStateToProps, { GetAccountData, GetBiodataData, GetPendidikanData, GetKeterampilanData, GetKeluargaData, GetRiwayatKerjaData, GetPertanyaanData })(Profile)


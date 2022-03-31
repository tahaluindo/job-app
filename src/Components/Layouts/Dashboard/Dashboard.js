import React, { Fragment } from 'react'

import { connect } from 'react-redux'
// import { GetJobApply, GetJobSave } from '../../../Store/Actions/Job.Action'

import { Grid, Paper, List, ListItemButton, ListItemText, ListItemIcon, Collapse } from '@mui/material'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

import Notification from '../../Containers/Dashboard/Dashboard/Notification'
import PRPengajuan from '../../Containers/Dashboard/Dashboard/PR/Pengajuan'
import PRPenerimaan from '../../Containers/Dashboard/Dashboard/PR/Penerimaan'
import JOBJob from '../../Containers/Dashboard/Dashboard/Job/Job'
import JOBPersonaltyTest from '../../Containers/Dashboard/Dashboard/Job/PersonaltyTest'
import JOBOffering from '../../Containers/Dashboard/Dashboard/Job/Offering'
import JOBMCU from '../../Containers/Dashboard/Dashboard/Job/MCU'
import JOBPReboarding from '../../Containers/Dashboard/Dashboard/Job/PReboarding'
import JOBPKWT from '../../Containers/Dashboard/Dashboard/Job/PKWT'
import JOBGreetDay from '../../Containers/Dashboard/Dashboard/Job/GreetDay'
import JOBKontrak from '../../Containers/Dashboard/Dashboard/Job/GreetDay'
import JOBOnBoarding from '../../Containers/Dashboard/Dashboard/Job/OnBoarding'
import IntUser from '../../Containers/Dashboard/Dashboard/Interview/User'
import IntHRGA from '../../Containers/Dashboard/Dashboard/Interview/HRGA'
class Dashboard extends React.Component {
    componentDidMount() {
    }
    state = {
        DashboardNumber: 0,
        PRMenuOpen: false,
        JobMenuOpen: false,
        InterviewMenuOpen: false
    }
    handlePRMenu = () => {
        this.setState({ PRMenuOpen: !this.state.PRMenuOpen })
    }
    handleJobMenu = () => {
        this.setState({ JobMenuOpen: !this.state.JobMenuOpen })
    }
    handleInterviewMenu = () => {
        this.setState({ InterviewMenuOpen: !this.state.InterviewMenuOpen })
    }
    handleMenuChange = (e, DashboardValue) => {
        this.setState({ DashboardNumber: DashboardValue })
    }
    render() {
        const Auth = this.props.Auth
        const User = Auth ? Auth.User : null
        const Role = User ? User.Role : null
        const {
            DashboardNumber,
            PRMenuOpen,
            JobMenuOpen,
            InterviewMenuOpen
        } = this.state
        return (
            <Fragment>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Paper
                        style={{ border: '0px solid red', width: '20%', minHeight: '90vh', marginRight: '5%' }}
                    >
                        <h2>
                            Navigation
                        </h2>
                        <div
                            style={{ border: '0px solid red', padding: '1%' }}
                        >
                            <List>
                                <div>
                                    <ListItemButton
                                        sx={{ pl: 1 }}
                                        onClick={(e) => this.handleMenuChange(e, 0)}
                                    >
                                        <ListItemText
                                            primary="Notification"
                                        />
                                    </ListItemButton>
                                </div>
                                <div>
                                    <ListItemButton
                                        sx={{ pl: 1 }}
                                        onClick={this.handlePRMenu}
                                    >
                                        <ListItemText
                                            primary="PR"
                                        />
                                        <ListItemIcon>
                                            {PRMenuOpen ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemIcon>
                                    </ListItemButton>
                                    <Collapse in={PRMenuOpen} timeout="auto" unmountOnExit>
                                        {Role === 'Admin' || Role === 'HeadDepartemen' || Role === 'Departemen' ?
                                            <ListItemButton
                                                sx={{ pl: 3 }}
                                                onClick={(e) => this.handleMenuChange(e, 1)}
                                            >
                                                <ListItemText
                                                    primary="Pengajuan"
                                                />
                                            </ListItemButton>
                                            : null}
                                        {Role === 'Admin' || Role === 'HeadHR' || Role === 'HR' ?
                                            <ListItemButton
                                                sx={{ pl: 3 }}
                                                onClick={(e) => this.handleMenuChange(e, 2)}
                                            >
                                                <ListItemText
                                                    primary="Penerimaan"
                                                />
                                            </ListItemButton>
                                            : null}
                                    </Collapse>
                                </div>
                                <div>
                                    <ListItemButton
                                        sx={{ pl: 1 }}
                                        onClick={this.handleJobMenu}
                                    >
                                        <ListItemText
                                            primary="Job Related"
                                        />
                                        <ListItemIcon>
                                            {JobMenuOpen ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemIcon>
                                    </ListItemButton>
                                    <Collapse in={JobMenuOpen} timeout="auto" unmountOnExit>
                                        <ListItemButton
                                            sx={{ pl: 3 }}
                                            onClick={(e) => this.handleMenuChange(e, 3)}
                                        >
                                            <ListItemText
                                                primary="Job Detail"
                                            />
                                        </ListItemButton>
                                        {Role === 'Admin' || Role === 'HeadHR' || Role === 'HR' ?
                                            <ListItemButton
                                                sx={{ pl: 3 }}
                                                onClick={(e) => this.handleMenuChange(e, 4)}
                                            >
                                                <ListItemText
                                                    primary="Personalty Tes"
                                                />
                                            </ListItemButton>
                                            : null}
                                        {Role === 'Admin' || Role === 'HeadHR' || Role === 'HR' ?
                                            <ListItemButton
                                                sx={{ pl: 3 }}
                                                onClick={(e) => this.handleMenuChange(e, 5)}
                                            >
                                                <ListItemText
                                                    primary="Offering"
                                                />
                                            </ListItemButton>
                                            : null}
                                        {Role === 'Admin' || Role === 'HeadHR' || Role === 'HR' ?
                                            <ListItemButton
                                                sx={{ pl: 3 }}
                                                onClick={(e) => this.handleMenuChange(e, 6)}
                                            >
                                                <ListItemText
                                                    primary="MCU"
                                                />
                                            </ListItemButton>
                                            : null}
                                        {Role === 'Admin' || Role === 'HeadHR' || Role === 'HR' ?
                                            <ListItemButton
                                                sx={{ pl: 3 }}
                                                onClick={(e) => this.handleMenuChange(e, 7)}
                                            >
                                                <ListItemText
                                                    primary="Preboarding"
                                                />
                                            </ListItemButton>
                                            : null}
                                        {Role === 'Admin' || Role === 'HeadHR' || Role === 'HR' ?
                                            <ListItemButton
                                                sx={{ pl: 3 }}
                                                onClick={(e) => this.handleMenuChange(e, 8)}
                                            >
                                                <ListItemText
                                                    primary="PKWT/PKWTT"
                                                />
                                            </ListItemButton>
                                            : null}
                                        {Role === 'Admin' || Role === 'HeadHR' || Role === 'HR' ?
                                            <ListItemButton
                                                sx={{ pl: 3 }}
                                                onClick={(e) => this.handleMenuChange(e, 9)}
                                            >
                                                <ListItemText
                                                    primary="Great Day"
                                                />
                                            </ListItemButton>
                                            : null}
                                        {Role === 'Admin' || Role === 'HeadHR' || Role === 'HR' ?
                                            <ListItemButton
                                                sx={{ pl: 3 }}
                                                onClick={(e) => this.handleMenuChange(e, 10)}
                                            >
                                                <ListItemText
                                                    primary="Kontrak"
                                                />
                                            </ListItemButton>
                                            : null}
                                        {Role === 'Admin' || Role === 'HeadHR' || Role === 'HR' ?
                                            <ListItemButton
                                                sx={{ pl: 3 }}
                                                onClick={(e) => this.handleMenuChange(e, 11)}
                                            >
                                                <ListItemText
                                                    primary="OnBoarding"
                                                />
                                            </ListItemButton>
                                            : null}
                                    </Collapse>
                                </div>
                                <div>
                                    <ListItemButton
                                        sx={{ pl: 1 }}
                                        onClick={this.handleInterviewMenu}
                                    >
                                        <ListItemText
                                            primary="Interview"
                                        />
                                        <ListItemIcon>
                                            {InterviewMenuOpen ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemIcon>
                                    </ListItemButton>
                                    <Collapse in={InterviewMenuOpen} timeout="auto" unmountOnExit>
                                        {Role === 'Admin' || Role === 'HeadDepartemen' || Role === 'Departemen' ?
                                            <ListItemButton
                                                sx={{ pl: 3 }}
                                                onClick={(e) => this.handleMenuChange(e, 12)}
                                            >
                                                <ListItemText
                                                    primary="Jadwal Interview User"
                                                />
                                            </ListItemButton>
                                            : null}
                                        {Role === 'Admin' || Role === 'HeadHR' || Role === 'HR' ?
                                            <ListItemButton
                                                sx={{ pl: 3 }}
                                                onClick={(e) => this.handleMenuChange(e, 13)}
                                            >
                                                <ListItemText
                                                    primary="Jadwal Interview HRGA"
                                                />
                                            </ListItemButton>
                                            : null}
                                    </Collapse>
                                </div>
                            </List>
                        </div>
                    </Paper>
                    <Paper
                        style={{ border: '0px solid red', width: '72%', padding: '1%', minHeight: '80vh' }}
                    >
                        {DashboardNumber === 0 ? <Notification /> : null}
                        {DashboardNumber === 1 ? <PRPengajuan /> : null}
                        {DashboardNumber === 2 ? <PRPenerimaan /> : null}
                        {DashboardNumber === 3 ? <JOBJob Role={Role} /> : null}
                        {DashboardNumber === 4 ? <JOBPersonaltyTest /> : null}
                        {DashboardNumber === 5 ? <JOBOffering /> : null}
                        {DashboardNumber === 6 ? <JOBMCU /> : null}
                        {DashboardNumber === 7 ? <JOBPReboarding /> : null}
                        {DashboardNumber === 8 ? <JOBPKWT /> : null}
                        {DashboardNumber === 9 ? <JOBGreetDay /> : null}
                        {DashboardNumber === 10 ? <JOBKontrak /> : null}
                        {DashboardNumber === 11 ? <JOBOnBoarding /> : null}
                        {DashboardNumber === 12 ? <IntUser /> : null}
                        {DashboardNumber === 13 ? <IntHRGA /> : null}
                    </Paper>
                </Grid>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    // Job: state.Job,
    Auth: state.Auth,
})

export default connect(mapStateToProps, {})(Dashboard)



import React from "react"

import { Link as GoTo, useNavigate } from 'react-router-dom'

import { Grid, Button, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material'

import Logo from '../../Img/Etana_logo.png'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'

import { Database_Role } from '../../Store/Actions/Database.Action'

const Header = ({ isAuth, UserName, Role }) => {
    const [userOpen, setUserOpen] = React.useState(false)

    const handleUserOpen = () => {
        setUserOpen(!userOpen);
    }

    const StyleMenu = { margin: '0 1% 0 0%', border: '0px solid red', fontSize: '18px', fontWeight: 'inherit', display: 'flex' }
    const defaultStyle = { border: '0px solid red', margin: ' 10px', color: 'black', fontSize: '120%', textDecoration: 'none' }
    const Navigate = useNavigate()
    const handleImgClick = () => {
        window.location.href = '/'
    }
    const goToEtana = () => {
        window.location.href = 'https://www.id.etanabiotech.com/'
    }
    const goToLogin = () => {
        Navigate("/login")
    }
    const goToLogout = () => {
        Navigate("/logout")
        setUserOpen(false)
    }
    const goToProfile = () => {
        Navigate("/profile")
        setUserOpen(false)
    }
    // const goToApplications = () => {
    //     Navigate("/applications")
    // }
    // const goToDashboard = () => {
    //     Navigate("/dashboard")
    // }

    // const MouseHover = (e) => {
    //     console.log(111)
    //     try {
    //         const Id = e.target.id
    //         document.getElementById(Id).style.color = 'red'
    //     } catch (err) {
    //         console.log('Log: MouseHover -> err', err)
    //     }
    // }
    // const MouseOut = (e) => {
    //     try {
    //         const Id = e.target.id
    //         document.getElementById(Id).style.color = ContrastTextColor
    //     } catch (err) {
    //         console.log('Log: MouseOut -> err', err)
    //     }
    // }
    // console.log(Database_Role)
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            style={{ border: '0px solid blue', padding: '0', width: '100%', height: '11vh' }}
        >
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                style={{ border: '0px solid red', width: '20%', height: '11vh', padding: '0 0 0 1%', margin: '0' }}
            >
                <div>
                    <img
                        src={Logo}
                        style={{ height: '100%', width: '50%', padding: '1% 1% 1% 2%', border: '0px solid red', cursor: 'pointer' }}
                        alt="Logo"
                        onClick={handleImgClick}
                    />
                </div>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-start"
                style={{ border: '0px solid red', width: '80%', height: '11vh', padding: '0 1% 0 0', margin: '0' }}
            >
                <div
                    style={StyleMenu}
                >
                    {isAuth ?
                        <div>
                        </div> :
                        <GoTo
                            to=''
                            // id='Navbar_etana.com'
                            style={{ ...defaultStyle }}
                            // onMouseOver={(e) => MouseHover(e)}
                            // onMouseOut={(e) => MouseOut(e)}
                            onClick={goToEtana}
                        >
                            etana.com
                        </GoTo>
                    }
                </div>
                <div
                    style={StyleMenu}
                >
                    <GoTo
                        to='/'
                        // id='Navbar_JobList'
                        style={defaultStyle}
                    // onMouseOver={(e) => MouseHover(e)}
                    // onMouseOut={(e) => MouseOut(e)}
                    >
                        Job List
                    </GoTo>
                </div>
                {isAuth ?
                    <div
                        style={StyleMenu}
                    >
                        <GoTo
                            to={Role ? (Role === Database_Role[1] ? '/applications' : '/dashboard') : '/'}
                            // id='Navbar_JobList'
                            style={defaultStyle}
                        // onMouseOver={(e) => MouseHover(e)}
                        // onMouseOut={(e) => MouseOut(e)}
                        >
                            {Role ? (Role === Database_Role[1] ? 'Applications' : 'Dashboard') : ''}
                        </GoTo>
                    </div>
                    : <div></div>
                }
                <div
                    style={StyleMenu}
                >
                    {isAuth ?
                        <div>
                            <span
                                style={{ ...defaultStyle, ...{ display: 'flex', width: '15vw', justifyContent: 'center', cursor: 'pointer' } }}
                                onClick={handleUserOpen}
                            >
                                Hi,  {UserName ? UserName : '12345678901234567890'}{userOpen ? <ExpandLess /> : <ExpandMore />}
                            </span>
                            <Collapse in={userOpen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding style={{ border: '0px solid red', width: '15vw', backgroundColor: 'white' }}>
                                    <Divider />
                                    <ListItemButton
                                        sx={{ pl: 1 }}
                                        onClick={goToProfile}
                                    >
                                        <ListItemIcon>
                                            <ManageAccountsRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Manage Account" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton
                                        sx={{ pl: 1 }}
                                        onClick={goToLogout}
                                    >
                                        <ListItemIcon>
                                            <LogoutRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Log Out" />
                                    </ListItemButton>
                                    <Divider />
                                </List>
                            </Collapse>
                        </div>
                        : <Button
                            variant="outlined"
                            color="primary"
                            style={{ width: '15vw', borderRadius: '18px', margin: '10px' }}
                            onClick={goToLogin}
                        >
                            Login
                        </Button>
                    }
                </div>
            </Grid>
        </Grid >
    )
}

export default Header
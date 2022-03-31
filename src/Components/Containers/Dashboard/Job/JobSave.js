import React from "react"

import { useNavigate } from 'react-router-dom'

import { Container, List, ListItemButton, Divider, Grid, Button } from "@mui/material"

import WorkIcon from '@mui/icons-material/Work'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const JobSave = ({ Data }) => {
    const Navigate = useNavigate()

    const goToSaveJob = () => {
        Navigate("/savejob")
    }
    const DetailStyle = { border: '0px solid red', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '30%' }
    const DetailLogoStyle = { marginRight: '2%' }
    return (
        <Container>
            <center>
                <h1>
                    Save Job
                </h1>
            </center>
            <List
                style={{ margin: '1% 0 5% 0' }}
            >
                {Data ? Data.map((item, index) =>
                    <div
                        key={`JobSave${index}`}
                    >
                        <ListItemButton
                        // onClick={goToSaveJob}
                        >
                            <Grid
                                container
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                            >
                                {/* <h1>{JSON.stringify(item)}</h1> */}
                                <h2>{item.Title}</h2>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="flex-start"
                                >
                                    <div
                                        style={DetailStyle}
                                    >
                                        <WorkIcon
                                            style={DetailLogoStyle}
                                        />
                                        {item.Departemen}
                                    </div>
                                    <div
                                        style={DetailStyle}
                                    >
                                        <SignalCellularAltIcon
                                            style={DetailLogoStyle}
                                        />
                                        {item.Tingkat}
                                    </div>
                                    <div
                                        style={DetailStyle}
                                    >
                                        <LocationOnIcon
                                            style={DetailLogoStyle}
                                        />
                                        {item.Lokasi}
                                    </div>
                                </Grid>
                                <div
                                    style={{ margin: '2% 0 1% 0', width: '95%' }}
                                >
                                    <center>
                                        <Divider />
                                        <Button
                                            // variant="outlined"
                                            variant="contained"
                                            style={{margin:'2% 0 1% 0', width:'60%', borderRadius:'18px'}}
                                            onClick={goToSaveJob}
                                        >
                                            See Detail
                                        </Button>
                                    </center>
                                </div>
                            </Grid>
                        </ListItemButton>
                        <Divider />

                    </div>
                ) : null}
            </List>
        </Container >
    )
}

export default JobSave
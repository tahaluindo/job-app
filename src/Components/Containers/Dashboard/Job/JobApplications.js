import React from "react"

import { useNavigate } from 'react-router-dom'

import { Container, Select, MenuItem, List, ListItemButton, Divider, Grid } from "@mui/material"

const JobApplications = ({ Data }) => {
    const [selected, setSelected] = React.useState('Active')

    const handleChange = (event) => {
        setSelected(event.target.value)
    }

    const Navigate = useNavigate()

    const goToApplyJob = () => {
        Navigate("/applyjob")
    }

    return (
        <Container>
            <center>
                <h1>
                    Job Applications
                </h1>
            </center>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selected}
                label="selected"
                onChange={handleChange}
                style={{ marginLeft: '90%' }}
            >
                <MenuItem value={'Active'}>Active</MenuItem>
                <MenuItem value={'Inactive'}>Inactive</MenuItem>
            </Select>
            <List
            style={{margin:'1% 0 5% 0'}}
            >
                {Data ? Data.map((item, index) =>
                    <div
                        key={`JobApplications${index}`}
                    >

                        <ListItemButton
                            onClick={goToApplyJob}
                        >
                            <Grid
                                container
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                            >
                                <h2>{item.Title}</h2>
                                {/* <h1>{JSON.stringify(item)}</h1> */}
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="flex-start"
                                >
                                    <p>Applied on 13/01/2022</p>
                                    <p
                                        style={{ marginLeft: '5%' }}
                                    >Status :
                                        <span
                                            style={{ color: index === 2 ? 'red' : 'green' }}
                                        >
                                            {index === 0 ? ' Application sent' : index === 1 ? ' Application being reviewed' : ' Application rejected'}
                                        </span>
                                    </p>
                                </Grid>
                            </Grid>
                        </ListItemButton>
                        <Divider />

                    </div>
                ) : null}
            </List>
        </Container >
    )
}

export default JobApplications
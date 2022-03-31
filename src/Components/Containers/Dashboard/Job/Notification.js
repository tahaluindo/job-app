import React from "react"

// import { useNavigate } from 'react-router-dom'

import { Container } from '@mui/material'

const Notification = ({ Data }) => {
    // const Navigate = useNavigate()

    // const goToSaveJob = () => {
    //     Navigate("/savejob")
    // }
    return (
        <Container>
            <center>
                <h1
                style={{margin:'5% 0 30% 0'}}
                >
                    No Notifications at This Time
                </h1>
            </center>
        </Container >
    )
}

export default Notification
import React from "react"

import { Container, Stepper, Step, StepLabel, Button, Paper } from '@mui/material'

import Profile from '../Account/Profile'
import Daftar from '../Daftar'
import Pernyataan from '../Job/Pernyataan'
// import Other from '../Job/Other'

class DaftarKerja extends React.Component {
    state = {
        StepValue: 0,
        MaxStep: 3
    }
    handleNext = () => {
        if (this.state === this.state.MaxStep - 1) {
            this.setState({ StepValue: this.state.MaxStep - 1 })
        } else {
            this.setState({ StepValue: this.state.StepValue + 1 })
        }
    }
    handleBack = () => {
        if (this.state === 0) {
            this.setState({ StepValue: 0 })
        } else {
            this.setState({ StepValue: this.state.StepValue - 1 })
        }
    }
    render() {
        const steps = ['Biodata Confirm', 'Other Need', 'Pernyataan']
        const {
            StepValue
        } = this.state
        return (
            <div>
                <Container>
                    <Stepper activeStep={StepValue}>
                        {steps.map((label, index) => {
                            const stepProps = {}
                            const labelProps = {}
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            )
                        })}
                    </Stepper>
                    <Paper
                        style={{ padding: '5%' }}
                    >

                        {StepValue === 0 ?
                            <Profile />
                            : StepValue === 1 ?
                                <Daftar />
                                : <Pernyataan />
                        }
                    </Paper>
                    <center>
                        <Button
                            variant='contained'
                            size='large'
                            color="error"
                            disabled={StepValue === 0 ? true : false}
                            onClick={this.handleBack}
                            style={{ margin: '5% 10% 5% 10%', width: '10vw' }}
                        >
                            Back
                        </Button> <Button
                            variant='contained'
                            size='large'
                            disabled={StepValue === this.state.MaxStep - 1 ? true : false}
                            onClick={this.handleNext}
                            style={{ margin: '5% 10% 5% 10%', width: '10vw' }}
                        >
                            Next
                        </Button>
                    </center>
                </Container>
            </div>
        )
    }
}

export default DaftarKerja


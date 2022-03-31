import React from 'react'

import { Button } from '@mui/material'

class SubmitKontrak extends React.Component {
    state = {
        Profilepicture: null
    }
    File_OnChange = E => {
        this.setState({ [E.target.name]: E.target.files[0] })
    }
    render() {
        // const {
        //     Profilepicture
        // } = this.state
        return (
            <div>
                <label>Silahkan Upload Dokumen PersonaltyTest:</label><br />
                <input type='file' accept='image/*' onChange={this.File_OnChange} name='Profilepicture' /><br />
                <center>
                    <Button
                        variant='contained'
                        style={{ margin: '10% 0 5% 0', width: '60%' }}
                    >
                        Submit
                    </Button>
                </center>
            </div>
        )
    }
}

export default SubmitKontrak
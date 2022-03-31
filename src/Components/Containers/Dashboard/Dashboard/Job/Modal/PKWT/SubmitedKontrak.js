import React from 'react'
class SubmitedKontrak extends React.Component {
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
                <label>PKWT/PKWTT</label><br />
                <center>
                    <img
                        src={null}
                        alt='foto PKWT/PKWTT'
                        style={{ border: '1px solid black', width: '80%', height: 'auto', margin: '2% 0 5% 0' }}
                    /><br />
                </center>
            </div>
        )
    }
}

export default SubmitedKontrak
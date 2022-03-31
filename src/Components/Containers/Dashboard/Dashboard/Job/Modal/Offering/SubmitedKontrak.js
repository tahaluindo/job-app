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
                <label>Offering</label><br />
                <center>
                    <h2
                        style={{ margin: '0 0 0 0', padding: '1%', color: 'green', border: '1px solid blue' }}
                    >
                        Status: Lolos
                    </h2>
                </center>
                <h3>Oleh: Adnan</h3>
                <h3>Tanggal: 19/12/2022</h3>
                <h3>Keterangan:</h3>
                <center>
                    <img
                        src={null}
                        alt='foto Offering'
                        style={{ border: '1px solid black', width: '80%', height: 'auto', margin: '2% 0 5% 0' }}
                    /><br />
                    <h2
                        style={{ margin: '0 0 0 0', padding: '1%', color: 'black', border: '1px solid black' }}
                    >
                        Nominal Diminta 15.000.000
                    </h2>
                </center>
            </div>
        )
    }
}

export default SubmitedKontrak
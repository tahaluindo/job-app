import React from "react"

import Profile from '../../../../../../../../Layouts/Account/Profile'

const DetailMenunggu = () => {
    return (
        <div>
            <div
                style={{ margin: '0 0 3% 0', borderBottom: '1px solid black' }}
            >
                <h2
                    style={{ borderBottom: '1px solid black' }}
                >
                    Status Pengurusan
                </h2>
                <h3>
                    HR:
                </h3>
                <center>
                    <h2
                        style={{ margin: '0 0 0 0', padding: '1%', color: 'green', border: '1px solid blue' }}
                    >
                        Status: Diajukan
                    </h2>
                </center>
                <p>Oleh: Andi</p>
                <p>Tanggal: 19/8/2022</p>
                <p>Keterangan: CV Menarik</p>
                <h3>
                    Departemen:
                </h3>
                <center>
                    <h2
                        style={{ margin: '0 0 0 0', padding: '1%', color: 'Red', border: '1px solid Black' }}
                    >
                        Status: Ditolak
                    </h2>
                </center>
                <p>Oleh: Anton</p>
                <p>Tanggal: 21/8/2022</p>
                <p>Keterangan: Pengalaman Kurang</p>
            </div>
            <Profile DisableEdit={true} />
        </div>
    )
}
export default DetailMenunggu
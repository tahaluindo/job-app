import React from 'react'

import { Table, TableHead, TableBody, TableRow, TableCell, Checkbox, Collapse } from '@mui/material'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

const Overview = () => {
    const [userOpen, setUserOpen] = React.useState(false)
    const handleUserOpen = () => {
        setUserOpen(!userOpen);
    }
    return (
        <div
            style={{ margin: '1% 0 1% 0' }}
        >
            <Table stickyHeader id='Tabel_Account_Pendidikan'>
                <TableHead>
                    <TableRow>
                        <TableCell style={{ width: '5%' }} align="left">No</TableCell>
                        <TableCell style={{ width: '55%' }} align="left">Data</TableCell>
                        <TableCell style={{ width: '10%' }} align="left">Ketersediaan</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                        style={{ cursor: 'pointer' }}
                        onClick={handleUserOpen}
                    >
                        <TableCell align="left">1</TableCell>
                        <TableCell align="left">Data Diri{userOpen ? <ExpandLess /> : <ExpandMore />}</TableCell>
                        <TableCell align="left">
                            <Checkbox
                                checked={true}
                                disabled={true}
                            />
                        </TableCell>
                    </TableRow>
                    <Collapse in={userOpen} timeout="auto" unmountOnExit>
                        <TableBody>
                            <TableRow>
                                <TableCell align="left">1.1</TableCell>
                                <TableCell align="left">Nama</TableCell>
                                <TableCell align="left">
                                    <Checkbox
                                        checked={true}
                                        disabled={true}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">1.2</TableCell>
                                <TableCell align="left">Alamat</TableCell>
                                <TableCell align="left">
                                    <Checkbox
                                        checked={true}
                                        disabled={true}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">1.3</TableCell>
                                <TableCell align="left">No KTP</TableCell>
                                <TableCell align="left">
                                    <Checkbox
                                        checked={true}
                                        disabled={true}
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Collapse>
                    <TableRow>
                        <TableCell align="left">2</TableCell>
                        <TableCell align="left">BPJS</TableCell>
                        <TableCell align="left">
                            <Checkbox
                                checked={true}
                                disabled={true}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">3</TableCell>
                        <TableCell align="left">Rekening BCA</TableCell>
                        <TableCell align="left">
                            <Checkbox
                                checked={true}
                                disabled={true}
                            />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div >
    )
}

export default Overview
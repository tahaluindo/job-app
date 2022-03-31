import React, { Fragment } from 'react'

import { Grid, Button, Table, TableHead, TableBody, TableRow, TableCell, Checkbox } from '@mui/material'

const Pendidikan = ({ Data, DisableEdit }) => {
    const DataPertanyaan = Data
    return (
        <Fragment>
            <div
                style={{ margin: '5% 0 5% 0' }}
            >
                {/* {JSON.stringify(Data)} */}
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    style={{ border: '0px solid red' }}
                >
                    <h2
                        style={{ width: '30vw' }}
                    >
                        Form Pertanyaan
                    </h2>
                    {!DisableEdit ?
                        <Button
                            variant='outlined'
                            size='large'
                            style={{ marginLeft: '50%', width: '10vw' }}
                        >
                            Edit
                        </Button> :
                        <div></div>}
                </Grid>
                <Table stickyHeader id='Tabel_Account_Pendidikan'>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: '5%' }} align="center">No</TableCell>
                            <TableCell style={{ width: '55%' }} align="center">Pertanyaan</TableCell>
                            <TableCell style={{ width: '10%' }} align="center">Jawaban (Ya)</TableCell>
                            <TableCell style={{ width: '10%' }} align="center">Jawaban (Tidak)</TableCell>
                            <TableCell style={{ width: '20%' }} align="center">Penjelasan</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {DataPertanyaan.map((item, index) => (
                            <TableRow hover key={index + 1}>
                                <TableCell align="left">{index + 1}</TableCell>
                                <TableCell align="left">{item.Pertanyaan}</TableCell>
                                <TableCell align="center">
                                    <Checkbox
                                        checked={item.Jawaban ? true : false}
                                        disabled={true}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <Checkbox
                                        checked={item.Jawaban ? false : true}
                                        disabled={true}
                                    />
                                </TableCell>
                                <TableCell align="left">{item.Penjelasan}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div >
        </Fragment >
    )
}

export default Pendidikan
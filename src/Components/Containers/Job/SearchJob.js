import React from "react"

import { TextField, Button, Grid } from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'

const SearchJob = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ backgroundColor: '#f9f9f9', border: '0px solid red' }}
        >
            <TextField
                placeholder="Masukkan Kata Kunci"
                style={{ margin: '1% 3% 1% 0', width: '40vw', backgroundColor: 'white', borderRadius: '18px' }}
            />
            <Button
                style={{}}
                color='primary'
                variant="contained"
                size="large"
            >
                <SearchIcon /> Cari Lowongan
            </Button>
        </Grid>
    )
}

export default SearchJob
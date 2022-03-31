import React from "react"

import { Grid, Button } from '@mui/material'

import Logo from '../../Img/Etana_logo.png'

const MocHeader = () => {
    const StyleMenu = { margin: '0 5% 0 5%', border: '0px solid red', fontSize: '18px', fontWeight: 'inherit' }
    const handleImgClick = () => {
        window.location.href = '/'
    }
    return (
        <div>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <div>
                    <img
                        src={Logo}
                        style={{ height: '30%', width: '30%', padding: '1% 1% 1% 2%', border: '0px solid red', cursor: 'pointer' }}
                        alt="Logo"
                        onClick={handleImgClick}
                    />
                </div>
                <div
                    style={StyleMenu}
                >
                    <p
                    >
                        Tentang
                    </p>
                </div>
                <div
                    style={StyleMenu}
                >
                    <p>
                        Karir
                    </p>
                </div>
                <div
                    style={StyleMenu}
                >
                    <p>
                        Produk
                    </p>
                </div>
                <div
                    style={StyleMenu}
                >
                    <Button
                        variant="outlined"
                        color="primary"
                        style={{ width: '10vw', borderRadius: '18px' }}
                    >
                        Login
                    </Button>
                </div>

            </Grid>
        </div>
    )
}

export default MocHeader
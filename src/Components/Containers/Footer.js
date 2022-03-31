import React from "react"

import { List, Divider, Container, Grid } from '@mui/material'

import Logo from '../../Img/Etana_logo.png'

const Footer = () => {
    return (
        <footer
            style={{ border: '0px solid blue', bottom: '0px', left: '0px', position: 'relative', marginTop:'auto' }}
        >
            <List
                style={{ border: '0px solid red', bottom: '0px', position: '' }}
            >
                <Divider />
                <Container>
                    <div
                        style={{ padding: '8vh 0 8vh 0' }}
                    >
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="flex-start"
                        >
                            <div>
                                <img
                                    src={Logo}
                                    style={{ height: '40%', width: '40%', padding: '1% 1% 1% 2%', border: '0px solid red', cursor: 'pointer' }}
                                    alt="Logo"
                                />
                            </div>
                            <div>
                                <p>
                                    Beranda
                                </p>
                                <p>
                                    Tentang
                                </p>
                                <p>
                                    Produk
                                </p>
                                <p>
                                    Karir
                                </p>
                            </div>
                        </Grid>
                    </div>
                    <Divider />
                    <div
                        style={{ bottom: '10px', position: '', border: '0px solid red' }}
                    >
                        <p
                            style={{ textAlign: 'center', fontWeight: 'lighter', }}
                        >
                            © 2021-2022 Etana Biotechnologies.
                        </p>
                    </div>
                </Container>
            </List>
        </footer >
    )
}

export default Footer
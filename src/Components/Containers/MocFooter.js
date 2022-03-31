import React from "react"

import { List, Divider, Container, Grid } from '@mui/material'

import Logo from '../../Img/Etana_logo.png'

const MocFooter = () => {
    return (
        <div>
            <List>
                <Divider />
                <Container>
                    <div
                    style={{padding:'8vh 0 8vh 0'}}
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
                                    style={{ height: '30%', width: '30%', padding: '1% 1% 1% 2%', border: '0px solid red', cursor: 'pointer' }}
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
                    <div>
                        <p
                            style={{ textAlign: 'center', fontWeight: 'lighter' }}
                        >
                            Copyright © 2022 Etana. Trademarks belong to their respective owners. All rights reserved. | Persyaratan layanan | Kebijakan privasi
                        </p>
                    </div>
                </Container>
            </List>
        </div>
    )
}

export default MocFooter
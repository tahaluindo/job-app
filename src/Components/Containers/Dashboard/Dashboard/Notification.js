import React, { Fragment } from 'react'

import { List, ListItemButton, Grid, Divider } from '@mui/material'

const Notification = () => {
    const Data = [
        {
            Judul: 'Contoh Judul Notification',
            Keterngan: 'ini adalah keterangan yang panjang dari penjelasan judul diatas'
        },
        {
            Judul: 'Contoh Judul Notification 1',
            Keterngan: 'ini adalah keterangan yang panjang dari penjelasan judul diatas'
        }
    ]
    return (
        <Fragment>
            <h2>
                Notification
            </h2>
            <List
                style={{ margin: '1%' }}
            >
                {Data.map((item, index) =>
                    <Fragment
                        key={index}
                    >
                        <ListItemButton>
                            <Grid
                                container
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                            >
                                <h3>{item.Judul}</h3>
                                <p>{item.Keterngan}</p>
                            </Grid>
                        </ListItemButton>
                        <Divider />
                    </Fragment>
                )}
            </List>
        </Fragment>
    )
}

export default Notification
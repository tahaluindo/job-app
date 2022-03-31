import React from 'react'

import { Button, TextField } from '@mui/material'

const Account = ({ Data, DisableEdit }) => {
    const st_textfield = { marginTop: '10px', marginBottom: '10px', width: '100%', backgroundColor: '#E0E0E0' }
    return (
        <div>
            {!DisableEdit ?
                <Button
                    variant='outlined'
                    size='large'
                    style={{ marginLeft: '90%', width: '10vw' }}
                >
                    Edit
                </Button> :
                <div></div>}
            <TextField
                style={st_textfield}
                variant='outlined'
                InputProps={{ readOnly: true, }}
                type='text'
                label='User Name'
                name='UserName'
                value={Data?.UserName ? Data.UserName : ''
                }
            />
            <TextField
                style={st_textfield}
                variant='outlined'
                InputProps={{ readOnly: true, }}
                type='text'
                label='Email'
                name='UserName'
                value={Data?.UserName ? Data.UserName : ''
                }
            />
        </div>
    )
}

export default Account
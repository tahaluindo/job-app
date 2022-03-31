import React, { Fragment } from 'react'

import { Paper, Typography, Modal, Button, Alert } from '@mui/material'
// import Alert from '@material-ui/lab/Alert'

// import { makeStyles } from '@mui/material/styles'

const GenericModals = (props) => {
    const modalsize = (props.size === 'xl') ? 90 :
        (props.size === 'l') ? 80 :
            (props.size === 'm') ? 60 : 40
    // const useStyles = makeStyles((theme) => ({
    //     paper: {
    //         position: 'absolute',
    //         // width: `${modalsize}%`,
    //         width: props.uncontrollsize === true ? null : `${modalsize}%`,
    //         minWidth: props.uncontrollsize === true ? `${modalsize}%` : null,
    //         backgroundColor: theme.palette.background.paper,
    //         border: '2px solid #000',
    //         boxShadow: theme.shadows[5],
    //         padding: theme.spacing(2, 4, 3),
    //         marginLeft: `${(100 - modalsize) / 2}%`,
    //         marginRight: `${(100 - modalsize) / 2}%`,
    //         marginTop: 15,
    //         marginBottom: 10,
    //     },
    // }))
    // const classes = useStyles()
    const [isModalOpen, setOpen] = React.useState(false)

    const handleOpen = () => {
        if (props.ButtononClickevent !== null) {
            props.ButtononClickeven()
        }
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const header = (
        <Fragment>
            <Typography variant='h6' align='right' onClick={handleClose} style={{ cursor: 'pointer' }} >
                X
            </Typography>
            {props.header ?
                <Typography variant='h4' align='left'>
                    {props.header}
                </Typography> :
                <h1>HalamanTidakDitemukan</h1>
            }
        </Fragment>
    )

    const massages = (
        <Fragment>
            {props.massagestype ? (
                <Alert
                    variant="filled"
                    severity={props.massagestype ?
                        props.massagestype
                        : 'info'
                    }
                >
                    {props.massages ?
                        props.massages :
                        'info'
                    }
                </Alert>
            ) : null
            }
        </Fragment>
    )

    const body = (
        <Fragment>
            {props.body ?
                props.body :
                <h1>HalamanTidakDitemukan</h1>
            }
        </Fragment>
    )

    const footer = (
        <Fragment>
            {props.footer ?
                <Fragment>
                    <hr />
                    {props.footer}
                </Fragment> :
                null
            }
        </Fragment>
    )

    return (
        <Fragment>
            <Button
                type={props.Buttontype ? props.Buttontype : null}
                disabled={props.Buttondisabled ? props.Buttondisabled : false}
                variant={props.Buttonvariant ? props.Buttonvariant : "outlined"}
                style={props.Buttonstyle ? props.Buttonstyle : null}
                color={props.Buttoncolor ? props.Buttoncolor : ''}
                size={props.Buttonsize ? props.Buttonsize : 'medium'}
                onClick={handleOpen}
            >
                {props.Buttonlabel ? props.Buttonlabel : 'Open Modal'}
            </Button>
            <Modal
                open={isModalOpen}
                onClose={handleClose}
                style={{
                    overflow: 'auto',
                    display: 'block',
                }}
            >
                <Paper
                    // className={classes.paper}
                    style={{
                        position: 'absolute',
                        // width: `${modalsize}%`,
                        width: props.uncontrollsize === true ? null : `${modalsize}%`,
                        minWidth: props.uncontrollsize === true ? `${modalsize}%` : null,
                        // backgroundColor: theme.palette.background.paper,
                        border: '2px solid #000',
                        // boxShadow: theme.shadows[5],
                        // padding: theme.spacing(2, 4, 3),
                        padding: '1% 2% 1% 2%',
                        marginLeft: `${(100 - modalsize) / 2}%`,
                        marginRight: `${(100 - modalsize) / 2}%`,
                        marginTop: 15,
                        marginBottom: 10,
                    }}
                >
                    {header}
                    <hr />
                    {massages}
                    {body}
                    {footer}
                </Paper>
            </Modal>
        </Fragment>
    )
}

export default GenericModals
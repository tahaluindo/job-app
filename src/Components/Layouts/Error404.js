import React, { Fragment } from "react"

const Error404 = ({ MessageCode, MessageTitle, Messages }) => {
    const initialCode = 404
    const initialMessageTitle = "Page Not Found"
    const URLLocation = window.location.href
    // const WrongLocation = None
    const initialMessages = `There are no ${URLLocation} page`
    return (
        <Fragment>
            <center>
                <h1>{MessageCode ? MessageCode : initialCode}</h1>
                <h2>{MessageTitle ? MessageTitle : initialMessageTitle}</h2>
                <h3>{Messages ? Messages : initialMessages}</h3>
            </center>
        </Fragment>
    )
}

export default Error404
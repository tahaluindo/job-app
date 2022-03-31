import React, { Fragment } from 'react'

import JobDetail from './JobDetail'

class SaveJob extends React.Component {
    render() {
        return (
            <Fragment>
                <JobDetail Save={true} />
            </Fragment>
        )
    }
}

export default SaveJob
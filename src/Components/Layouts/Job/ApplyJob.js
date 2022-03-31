import React, { Fragment } from 'react'

import JobDetail from './JobDetail'

class ApplyJob extends React.Component {
    render() {
        return (
            <Fragment>
                <JobDetail Apply={true} />
            </Fragment>
        )
    }
}

export default ApplyJob
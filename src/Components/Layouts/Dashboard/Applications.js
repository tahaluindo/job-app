import React from 'react'

import { connect } from 'react-redux'
import { GetJobApply, GetJobSave } from '../../../Store/Actions/Job.Action'

import { Tabs, Tab } from '@mui/material'

import JobApplications from '../../Containers/Dashboard/Job/JobApplications'
import JobSave from '../../Containers/Dashboard/Job/JobSave'
import Notification from '../../Containers/Dashboard/Job/Notification'

class Applications extends React.Component {
    componentDidMount() {
        this.props.GetJobApply()
        this.props.GetJobSave()
    }
    state = {
        TabValue: 0
    }
    handleTabChange = (e, newTabValue) => {
        this.setState({ TabValue: newTabValue })
    }
    render() {
        const JobApplyData = this.props.JobApplyData
        const JobSaveData = this.props.JobSaveData

        const TabData = [
            { TabLabel: 'Job Apply', TabPanel: <JobApplications Data={JobApplyData} /> },
            { TabLabel: 'Save Job', TabPanel: <JobSave Data={JobSaveData} /> },
            { TabLabel: 'Notification', TabPanel: <Notification /> },
        ]

        const {
            TabValue
        } = this.state
        return (
            <div>
                <Tabs
                    value={TabValue}
                    onChange={this.handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant={TabData.length > 6 ? "scrollable" : null}
                    scrollButtons="auto"
                    centered={TabData.length > 6 ? false : true}
                >
                    {TabData.map((item, index) => (
                        <Tab key={`Tabs${index}`} label={item.TabLabel} />
                    ))}
                </Tabs>
                {TabValue === 0 ? TabData[TabValue].TabPanel : null}
                {TabValue === 1 ? TabData[TabValue].TabPanel : null}
                {TabValue === 2 ? TabData[TabValue].TabPanel : null}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    Job: state.Job,
    JobApplyData: state.Job.JobApply,
    JobSaveData: state.Job.JobSave
})

export default connect(mapStateToProps, { GetJobApply, GetJobSave })(Applications)

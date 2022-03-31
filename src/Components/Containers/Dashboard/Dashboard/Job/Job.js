import React, { Fragment } from 'react'

import { Tabs, Tab } from '@mui/material'

import Job from './Sub/Job/Job'
import ListPendaftar from './Sub/Job/ListPendaftar'
import Recommended from './Sub/Job/Recommended'

class Notification extends React.Component {
    state = {
        TabValue: 0
    }
    handleTabChange = (e, newTabValue) => {
        this.setState({ TabValue: newTabValue })
    }
    render() {
        const Role = this.props.Role ? this.props.Role : null
        const TabDataOrigin = [
            { TabLabel: 'Job', TabPanel: <Job /> },
            { TabLabel: 'ListPendaftar', TabPanel: <ListPendaftar /> },
            { TabLabel: 'Recommended', TabPanel: <Recommended /> },
        ]
        const {
            TabValue
        } = this.state
        const TabData = Role === 'HeadHR' || Role === 'HR' ? TabDataOrigin.slice(0, 2) :
            Role === 'HeadDepartemen' || Role === 'Departemen' ? TabDataOrigin.slice(2, 3) : TabDataOrigin
        return (
            <Fragment>
                <h2>
                    Jobs
                </h2>
                <Tabs
                    value={TabValue}
                    onChange={this.handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant={TabData.length > 6 ? "scrollable" : null}
                    scrollButtons="auto"
                // centered={TabData.length > 6 ? false : true}
                >
                    {TabData.map((item, index) => (
                        <Tab key={`Tabs${index}`} label={item.TabLabel} />
                    ))}
                </Tabs>
                <div
                    style={{ margin: '5% 0 5% 0' }}
                >
                    {TabValue === 0 ? TabData[TabValue].TabPanel : null}
                    {TabValue === 1 ? TabData[TabValue].TabPanel : null}
                    {TabValue === 2 ? TabData[TabValue].TabPanel : null}
                </div>
            </Fragment>
        )
    }
}

export default Notification
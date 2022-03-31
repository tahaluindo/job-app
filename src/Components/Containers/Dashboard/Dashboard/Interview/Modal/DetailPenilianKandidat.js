import React, { Fragment } from 'react'

import { Tabs, Tab } from '@mui/material'

import DetailPosisi from './Sub/DetailPosisi'
import DetailKaryawan from './Sub/DetailKaryawan'
import PenilaianInterview from './Sub/PenilaianInterview'

class DetailPenilianKandidat extends React.Component {
    state = {
        TabValue: 0
    }
    handleTabChange = (e, newTabValue) => {
        this.setState({ TabValue: newTabValue })
    }
    render() {
        const TabData = [
            { TabLabel: 'Penilaian Interview', TabPanel: <PenilaianInterview /> },
            { TabLabel: 'Detail Posisi', TabPanel: <DetailPosisi /> },
            { TabLabel: 'Detail Karyawan', TabPanel: <DetailKaryawan /> },
        ]
        const {
            TabValue
        } = this.state
        return (
            <Fragment>
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

export default DetailPenilianKandidat
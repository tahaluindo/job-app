import React from "react"

import { Routes, Route } from 'react-router-dom'

import MocJobList from './Components/Layouts/Job/MocJobList'
import MocJobDetail from './Components/Layouts/Job/MocJobDetail'
import MocDaftar from './Components/Layouts/MocDaftar'

import JobList from './Components/Layouts/Job/JobList'
import JobDetail from './Components/Layouts/Job/JobDetail'
import Daftar from './Components/Layouts/Daftar'
import Error404 from './Components/Layouts/Error404'

import Login from './Components/Layouts/Auth/Login'
import CreateAccount from './Components/Layouts/Auth/CreateAccount'
import ForgetPassword from './Components/Layouts/Auth/ForgetPassword'
import Profile from './Components/Layouts/Account/Profile'
import Logout from './Components/Layouts/Auth/Logout'
import Applications from './Components/Layouts/Dashboard/Applications'
import Dashboard from './Components/Layouts/Dashboard/Dashboard'

import ApplyJob from './Components/Layouts/Job/ApplyJob'
import SaveJob from './Components/Layouts/Job/SaveJob'

import DaftarKerja from './Components/Layouts/Job/DaftarKerja'

const BaseRouter = () => {
    return (
        <Routes>

            <Route exact path="/mocjoblist" element={<MocJobList />} />
            <Route exact path="/MocJobDetail" element={<MocJobDetail />} />
            <Route exact path="/MocDaftar" element={<MocDaftar />} />

            <Route exact path="/" element={<JobList />} />
            <Route exact path="/JobDetail" element={<JobDetail />} />
            <Route exact path="/Daftar" element={<Daftar />} />

            <Route exact path="/createaccount" element={<CreateAccount />} />
            <Route exact path="/forgetpassword" element={<ForgetPassword />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/logout" element={<Logout />} />
            <Route exact path="/applications" element={<Applications />} />
            <Route exact path="/dashboard" element={<Dashboard />} />

            <Route exact path="/applyjob" element={<ApplyJob />} />
            <Route exact path="/savejob" element={<SaveJob />} />

            <Route exact path="/daftarkerja" element={<DaftarKerja />} />

            <Route path="*" element={<Error404 />} />
        </Routes>
    )
}

export default BaseRouter
import React from 'react'

import { connect } from 'react-redux'
import { LogOut } from '../../../Store/Actions/Auth.Action'

import { Navigate } from 'react-router-dom'

class Logout extends React.Component {
    state = {
        redirectStatus: false
    }
    componentDidMount() {
        this.props.LogOut()
        setTimeout(() => this.setState({ redirectStatus: true }), 3000)
    }
    render() {
        const redirectStatus = this.state.redirectStatus
        return (
            <div>
                {redirectStatus ? <Navigate to="/" replace={true} /> : <div></div>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, { LogOut })(Logout)

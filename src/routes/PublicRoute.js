import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export class PublicRoute extends Component {
    render() {
        const {isAuthenticated, component: Component,...rest} = this.props
        return <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <Redirect to="/dashboard" />
            ) : (
                <Component {...props}/>
              )
          )} />
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: !!state.auth.uid
    }
}

export default connect(mapStateToProps)(PublicRoute)

import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Menu from '../components/Menu'

export class PrivateRoute extends Component {
    render() {
        const {isAuthenticated, component: Component,...rest} = this.props
        return <Route {...rest} component={(props) => (
            isAuthenticated ? (
              <div>
                <Menu />
                <Component {...props} />
              </div>
            ) : (
                <Redirect to="/" />
              )
          )} />
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: !!state.auth.uid
    }
}

export default connect(mapStateToProps)(PrivateRoute)

import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Menu from '../components/Menu'

export class PrivateRoute extends Component {
    getComponent = () => {
        const {isAuthenticated, component: Component} = this.props;
        if(isAuthenticated){
            return (
                <div>
                    <Menu/>
                    <Component {...this.props}/>
                </div>
            )
        }else{
            return <Redirect to="/" />
        }
    }
    render() {
        return (
            <div>
                <Route {...this.props} component={this.getComponent}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: !!state.auth.uid
    }
}

export default connect(mapStateToProps)(PrivateRoute)

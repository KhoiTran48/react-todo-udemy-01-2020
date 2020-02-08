import {NavLink} from 'react-router-dom'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signOut} from '../actions/auth'

export class Menu extends Component {
    render() {
        return (
            <div>
                <NavLink to="/" exact>/ </NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/add">Add Task</NavLink>
                <button onClick={this.props.signOut}>Logout</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: ()=>dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(Menu)

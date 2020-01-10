import {NavLink} from 'react-router-dom'
import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <NavLink to="/" exact>Dashboard</NavLink>
                <NavLink to="/add">Add Task</NavLink>
            </div>
        )
    }
}

import React, { Component } from 'react'
import TaskList from './TaskList'
import FilterTask from './FilterTask'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <FilterTask></FilterTask>
                <TaskList></TaskList>
            </div>
        )
    }
}

export default Dashboard




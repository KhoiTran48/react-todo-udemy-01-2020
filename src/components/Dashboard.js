import React, { Component } from 'react'
import TaskList from './TaskList'
import FilterTask from './FilterTask'

class Dashboard extends Component {
    handleFilter = (e)=>{
        const filterTask = this.props.listTask.filter((task)=>{
            return task.title.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
        });
        this.setState({[e.target.name]: e.target.value, listTask: filterTask})
    }
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




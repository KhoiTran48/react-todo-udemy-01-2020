import React, { Component } from 'react'
import TaskForm from './TaskForm'
import {addTaskAction} from '../actions/taskAction'
import {connect} from 'react-redux'

class AddTask extends Component {
    render() {
        return (
            <div>
                <TaskForm
                    handleSubmit = {(taskForm)=>{
                        this.props.addTaskAction(taskForm)
                        this.props.history.push("/")
                    }}                
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTaskAction: (task) => dispatch(addTaskAction(task))
    }
}

export default connect(null, mapDispatchToProps)(AddTask)
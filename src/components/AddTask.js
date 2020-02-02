import React, { Component } from 'react'
import TaskForm from './TaskForm'
import {addTaskApi} from '../actions/taskAction'
import {connect} from 'react-redux'

export class AddTask extends Component {
    render() {
        return (
            <div>
                <TaskForm
                    handleSubmit = {(taskForm)=>{
                        this.props.addTaskApiProp(taskForm)
                        this.props.history.push("/")
                    }}                
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTaskApiProp: (task) => dispatch(addTaskApi(task))
    }
}

export default connect(null, mapDispatchToProps)(AddTask)
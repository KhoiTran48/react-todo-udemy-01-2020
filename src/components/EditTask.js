import React, { Component } from 'react'
import TaskForm from './TaskForm'
import {connect} from 'react-redux'
import {editTaskAction, deleteTaskAction} from '../actions/taskAction'


class EditTask extends Component {
    render() {
        if(!this.props.editTask){
            this.props.history.push("/")
        }
        return (
            <div>
                <TaskForm
                    handleSubmit = {(taskForm)=>{
                        this.props.editTaskAction(taskForm)
                        this.props.history.push("/")
                    }}  
                    {...this.props.editTask}
                />
                <button
                    onClick={()=>{
                        this.props.deleteTaskAction(this.props.editTask.taskId)
                        this.props.history.push("/")
                    }}
                >Delete</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        editTask : state.listTask.find(task=>task.taskId === props.match.params.id)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editTaskAction: (task) => dispatch(editTaskAction(task)),
        deleteTaskAction: (taskId) => dispatch(deleteTaskAction(taskId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTask)

import React, { Component } from 'react'
import TaskForm from './TaskForm'
import {connect} from 'react-redux'
import {editTaskApi, deleteTaskApi} from '../actions/taskAction'


export class EditTask extends Component {
    render() {
        if(!this.props.editTask){
            this.props.history.push("/")
        }
        return (
            <div>
                <TaskForm
                    handleSubmit = {(taskForm)=>{
                        this.props.editTaskApiProp(taskForm)
                        this.props.history.push("/")
                    }}  
                    {...this.props.editTask}
                />
                <button
                    onClick={()=>{
                        this.props.deleteTaskApiProp(this.props.editTask.taskId)
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
        editTaskApiProp: (task) => dispatch(editTaskApi(task)),
        deleteTaskApiProp: (taskId) => dispatch(deleteTaskApi(taskId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTask)

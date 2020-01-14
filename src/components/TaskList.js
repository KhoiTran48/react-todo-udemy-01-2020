import React, { Component } from 'react'
import {connect} from 'react-redux'
import TaskInfo from './TaskInfo'
import selectTask from '../selectors/tasks'

export class TaskList extends Component {
    constructor(props){
        super(props)
    }
    renderTask(listTask){
        return listTask.map((task, key)=>{
            return <TaskInfo key={key} {...task}/>
        })
    }
    render() {
        return (
            <div>
                {this.renderTask(this.props.listTask)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listTask: selectTask(state.listTask, state.filter)
    }
}

export default connect(mapStateToProps)(TaskList)
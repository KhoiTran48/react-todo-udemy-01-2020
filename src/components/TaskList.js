import React, { Component } from 'react'
import {connect} from 'react-redux'
import TaskInfo from './TaskInfo'

class TaskList extends Component {
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

const filterTask = (listTask, filter) => {
    return listTask.filter(task=>{
        const startDateMatch = typeof filter.startDate !== "number" || task.deadline >= filter.startDate
        const endDateMatch = typeof filter.endDate !== "number" || task.deadline <= filter.endDate
        const textMatch = task.title.toLowerCase().indexOf(filter.text.toLowerCase()) >= 0
        return startDateMatch && endDateMatch && textMatch
    })
    .sort((a,b)=>{
        if(filter.order.toLowerCase() == "asc"){
            return a.deadline < b.deadline ? -1 : 1;
        }else{
            return a.deadline < b.deadline ? 1 : -1;
        }
    })
}

const mapStateToProps = state => {
    return {
        listTask: filterTask(state.listTask, state.filter)
    }
}

export default connect(mapStateToProps)(TaskList)
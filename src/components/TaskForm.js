import React, { Component } from 'react'
import moment from 'moment'
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


export default class TaskForm extends Component {
    constructor(props){
        super(props)
        this.state={
            taskId: props.taskId ? props.taskId : "",
            title : props.title ? props.title : "",
            desc : props.desc ? props.desc : "",
            deadline: props.deadline ? moment(props.deadline) : moment() 
        }
    }

    handleInput = (e)=>{
        if(e.target.value){
            this.setState({[e.target.name]: e.target.value})
        }
    }

    handleSubmit = (e) =>{
        let deadline = this.state.deadline.valueOf();
        this.props.handleSubmit({...this.state, deadline})
    }

    handleDate = (deadline) => {
        if(deadline){
            this.setState({deadline})
        }
    }

    render() {
        return (
            <div>
                Title
                <input 
                    type="text" 
                    name="title" 
                    value={this.state.title}
                    onChange={this.handleInput}
                    autoFocus
                    />
                Desc
                <input 
                    type="text" 
                    name="desc" 
                    value={this.state.desc}
                    onChange={this.handleInput}
                    />
                Created At
                <SingleDatePicker
                    date={this.state.deadline} // momentPropTypes.momentObj or null
                    onDateChange={this.handleDate} // PropTypes.func.isRequired
                    focused={this.state.focused} // PropTypes.bool
                    onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                    numberOfMonths={1}
                    />
                <button onClick={this.handleSubmit}>Save</button>
            </div>
        )
    }
}

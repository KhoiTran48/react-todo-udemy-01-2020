import React, { Component } from 'react'
import {setFilterTextAction, setOrderAction, setFiltertDateAction} from '../actions/filterAction'
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

class FilterTask extends Component {
    constructor(props){
        super(props);
        let startDate = props.filter.startDate ? moment(props.filter.startDate) : moment()
        let endDate = props.filter.endDate ? moment(props.filter.endDate) : moment()
        let text = props.filter.text
        let order = props.filter.order
        this.state = {startDate, endDate, text, order, focusedInput: null}
    }
    handleDate = (startDate, endDate)=>{
        if(startDate && endDate){
            this.setState({startDate, endDate})
            this.props.setFiltertDate(startDate.valueOf(), endDate.valueOf())
        }
    }
    handleInput = (e) => {
        this.setState({text: e.target.value})
        this.props.setFilterText(e.target.value)
    }
    handleSelect = (e) => {
        this.setState({order: e.target.value})
        this.props.setOrder(e.target.value)
    }
    render() {
        return (
            <div>
                <input type="text" name="filterTitle" 
                    onChange={this.handleInput} 
                    value={this.state.text}/>
                <select onChange={this.handleSelect} value={this.state.order}>
                    <option value="asc">Deadline ASC</option>
                    <option value="desc">Deadline DESC</option>
                </select>
                <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id"
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id"
                    onDatesChange={({ startDate, endDate }) => this.handleDate(startDate, endDate)} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    numberOfMonths={1}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setFilterText: (text) => dispatch(setFilterTextAction(text)),
        setOrder: (order) => dispatch(setOrderAction(order)),
        setFiltertDate: (startDate, endDate) => dispatch(setFiltertDateAction(startDate, endDate))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterTask)

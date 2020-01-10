import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'

export default class TaskInfo extends Component {
    render() {
        return (
            <div>
                <Link
                    to={`/edit/${this.props.taskId}`}
                >
                    <h3>{this.props.title}</h3>
                </Link>
                <p>{this.props.desc}</p>
                <p>{moment(this.props.deadline).format("MM-DD-YYYY")}</p>
            </div>
        )
    }
}

import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn} from '../actions/auth'

class LoginPage extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.signIn}>Login</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: ()=> dispatch(signIn())
    }
}

export default connect(null, mapDispatchToProps)(LoginPage)

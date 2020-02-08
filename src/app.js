import React, {Component} from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import AddTask from './components/AddTask'
import EditTask from './components/EditTask'
import ErrorPage from './components/ErrorPage'
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import LoginPage from './components/LoginPage'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'

import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

class App extends Component
{
    render(){
        return (
            <Router history={history}>
                <div>
                    {/* <Menu></Menu> */}
                    <Switch>
                        <PublicRoute
                            path="/" component={LoginPage} exact 
                        />
                        <PrivateRoute
                            path="/dashboard" component={Dashboard} 
                        />
                        <PrivateRoute
                            path="/add" component={AddTask}
                        />
                        <PrivateRoute
                            path="/edit/:id" component={EditTask}
                        />
                        <Route component={ErrorPage}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
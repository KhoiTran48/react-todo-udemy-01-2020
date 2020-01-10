import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import AddTask from './components/AddTask'
import EditTask from './components/EditTask'
import ErrorPage from './components/ErrorPage'
import Menu from './components/Menu'

class App extends Component
{
    render(){
        return (
            <BrowserRouter>
                <div>
                    <Menu></Menu>
                    <Switch>
                        <Route
                            path="/" component={Dashboard} exact 
                        />
                        <Route
                            path="/add" component={AddTask}
                        />
                        <Route
                            path="/edit/:id" component={EditTask}
                        />
                        <Route component={ErrorPage}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
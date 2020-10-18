import React, { Component } from 'react'
import { Route, Switch } from "react-router";

import DataPanel from './DataPanel.js'
import LoginForm from '../components/LoginForm.js'

export default class Admin extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path = "/login/panel" component = {DataPanel} />
                    <Route path = "/login" component={LoginForm} /> 
                    
                </Switch>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class LoginForm extends Component {
    render() {
        return (
            <div>
            <form>
                <label>Username:</label>
                <input type="text"></input><br/>
                <label>Password:</label>
                <input type="text"></input> <br/>
                <input type="submit" value="Login"/>
            </form>
        </div>
        )
    }
}

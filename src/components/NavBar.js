import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <ul>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/login">About</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        )
    }
}

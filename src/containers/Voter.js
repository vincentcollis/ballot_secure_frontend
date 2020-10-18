import React, { Component } from 'react'

import Ballot from '../components/Ballot'
import RegistrationForm from '../components/Registration'


export default class Voter extends Component {
    render() {
        return (
            <div>
                {/* User silters Voter File API
                    If they find their name they will get ballot
                    else
                    registration form
                */}
                <Ballot></Ballot>
                <RegistrationForm></RegistrationForm>
            </div>
        )
    }
}

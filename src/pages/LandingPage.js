import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import {Button} from 'primereact/button';


export default class LandingPage extends Component {

    render() {
        return (
        <>
            <div className="p-grid p-align-center">
                <div className="p-col-6">
                    <Button label="Voter"/>
                </div>
                <div className="p-col-6">
                    <Link to="/login">
                        <Button label="Admin"/>
                    </Link>
                </div>
            </div>
        </>
        );
    }
}
import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import {Button} from 'primereact/button';


export default class LandingPage extends Component {

    render() {
        return (
        <>
            <div className="p-grid p-fluid">
                <div className="p-col-12">
                <div className="topbar clearfix">
                    {/* <img className="logo" src="https://www.lssmn.org/sites/default/files/inline-images/VOTE%20HEADERweb.jpg" alt="logo"/> */}
                </div>
                    <div className="p-col-6 center">
                        <div className="card card-w-title">
                            
                            <h1>Welcome!</h1>
                            <h4>type your message here</h4>
                            <div className="p-grid">
                            <div className="p-col-12 p-lg-6">
                                <Link to="/Voter">
                                    <Button label="Voter"/>
                                </Link>
                            </div>
                        
                            <div className="p-col">
                                <Link to="/login">
                                    <Button label="Admin"/>
                                </Link>
                            </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
        );
    }
}
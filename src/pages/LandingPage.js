import React, {Component} from 'react';
import {Link} from 'react-router-dom'


import {Button} from 'primereact/button';
import {Card} from 'primereact/card'
import { Panel } from 'primereact/panel';


export default class LandingPage extends Component {

    render() {
        return (
        <>
            
            <div className="p-grid p-fluid">
                <div className="p-col-12">
                <div className="topbar clearfix">
                    {/* <img className="logo" src="https://www.lssmn.org/sites/default/files/inline-images/VOTE%20HEADERweb.jpg" alt="logo"/> */}
                </div>
                        <div className=" p-d-flex ">
                            <div className="p-d-flex" id="blue-header">Anything </div>
                        </div>
                    <div className="p-col-6 center">
                        
                        <div className="card card-w-title">
                            
                            <h1>Welcome!</h1>
                            
                                <img className="p-d-flex p-col-12 card" alt="" src="https://www.lssmn.org/sites/default/files/inline-images/VOTE%20HEADERweb.jpg"/>
                            
                            <Panel header="Our Goal">
                            <p>Lorem Ipsum kjshdfihosdflohlknopasdfiouo</p>
                            </Panel>
                            <h4></h4>
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
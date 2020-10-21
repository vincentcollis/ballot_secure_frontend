import React, { Component } from 'react'
import {RadioButton} from 'primereact/radiobutton';
import {Button} from 'primereact/button';


import {Link} from 'react-router-dom'

export default class Ballot extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            radioValuePres: null,
            radioValueSen: null,
            radioValueCon: null,
        }
    }
    

    handleClick = (event) => {
        event.preventDefault()
        
        console.log("click event")
    }
    
    
    render() {
        return (
            <>
            <div className="p-grid p-fluid">
                
            </div>
                <div className="card card-w-title">
                    <h1>President</h1>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-4">
                            <RadioButton value="Joe Biden" inputId="rb1" onChange={event => this.setState({radioValuePres: event.value})} checked={this.state.radioValuePres === "Joe Biden"}/>
                            <label htmlFor="rb1" className="p-radiobutton-label">Joe Biden</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <RadioButton value="Donald Trump" inputId="rb2" onChange={event => this.setState({radioValuePres: event.value})} checked={this.state.radioValuePres === "Donald Trump"}/>
                            <label htmlFor="rb2" className="p-radiobutton-label">Donald Trump</label>
                        </div>

                    </div>
                </div>

                <p></p>

                <div className="card card-w-title">
                    <h1>Senate</h1>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-4">
                            <RadioButton value="Kirsten Gillibrand" inputId="rb1" onChange={event => this.setState({radioValueSen: event.value})} checked={this.state.radioValueSen === "Kirsten Gillibrand"}/>
                            <label htmlFor="rb1" className="p-radiobutton-label">Kirsten Gillibrand</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <RadioButton value="Chele Farley" inputId="rb2" onChange={event => this.setState({radioValueSen: event.value})} checked={this.state.radioValueSen === "Chele Farley"}/>
                            <label htmlFor="rb2" className="p-radiobutton-label">Chele Farley</label>
                        </div>

                    </div>
                </div>

                <p></p>
                
                <div className="card card-w-title">
                    <h1>Congress</h1>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-4">
                            <RadioButton value="Alexandria Ocasio-Cortez" inputId="rb1" onChange={event => this.setState({radioValueCon: event.value})} checked={this.state.radioValueCon === "Alexandria Ocasio-Cortez"}/>
                            <label htmlFor="rb1" className="p-radiobutton-label">Alexandria Ocasio-Cortez</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <RadioButton value="John Cummings" inputId="rb2" onChange={event => this.setState({radioValueCon: event.value})} checked={this.state.radioValueCon === "John Cummings"}/>
                            <label htmlFor="rb2" className="p-radiobutton-label">John Cummings</label>
                        </div>
                    </div>
                </div>
                <div className="card card-w-title p-col-1">
                    <Link to="/Voter/Ballot/ThankYou" >
                        <Button label="Cast Vote!" />
                    </Link>
                </div>
            </>

        )
    }
}

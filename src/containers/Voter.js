import React, {Component} from 'react';
import nyCounties from '../containers/CountiesList'


import {InputText} from 'primereact/inputtext';
import {Dropdown} from 'primereact/dropdown';

export default class Voter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            dropdownState: null,
            states: [
                {label: 'Select State', value: null},
                {label: 'New York', value: 'New York'},
                {label: 'New Jersey', value: 'New Jersey'},
                {label: 'Connecticut', value: 'Connecticut'},
            ],
            dropdownCounty: null,
            counties: null,

            dropdownCity: null,
            cities: [
                {label: 'Select State', value: null},
                {label: 'New York', value: 'New York'},
                {label: 'New Jersey', value: 'New Jersey'},
                {label: 'Connecticut', value: 'Connecticut'},
            ],
        }
    }

    handleStateChange = (event) => {
        if(event.target.value === 'New York'){
            this.setState({dropdownState: event.value, counties: nyCounties})
        }
    }
    
    
    render() {
        console.log(this.state)
        return (
            <>
                <div className="p-grid p-fluid">
                    
                    <div className="p-col-12">
                        <div className="card">
                            <h1>Voter Page</h1>
                            <p>Use this page to start from scratch and place your custom content.</p>
                        </div>
                    </div>
                </div>

                <div className="p-grid p-fluid">
                    
                    <div className="p-col-4 card card-w-title">
                        <h1>State</h1>
                        <Dropdown options={this.state.states} value={this.state.dropdownState} 
                            onChange={this.handleStateChange} 
                            autoWidth={false} 
                        />
                    </div>

                    <div className="p-col-4 card card-w-title">
                        <h1>County</h1>
                        <Dropdown options={this.state.counties} value={this.state.dropdownCounty} onChange={event => this.setState({dropdownCounty: event.value})} autoWidth={false} />
                    </div>

                    <div className="p-col-4 card card-w-title">
                        <h1>City</h1>
                        <Dropdown options={this.state.cities} value={this.state.dropdownCity} onChange={event => this.setState({dropdownCity: event.value})} autoWidth={false} />
                    </div>
                </div>
            </>
        );
    }
}
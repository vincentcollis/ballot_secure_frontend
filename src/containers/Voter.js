import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import nyCounties from '../containers/CountiesList'
import bronxCountyCities from '../containers/CitiesList'


import {InputText} from 'primereact/inputtext';
import {Dropdown} from 'primereact/dropdown';
import {AutoComplete} from 'primereact/autocomplete';
import {Button} from 'primereact/button';

const APIURL = 'http://localhost:3000/registered_voters'

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
            cities: null,

            dropdownName:null,
            names:[],
            selectedName:'',
            votername:'',

            apiData: []
        }
        
        
    }

    handleStateChange = (event) => {
        if(event.target.value === 'New York'){
            this.setState({dropdownState: event.value, counties: nyCounties})
        }
    }

    handleCountyChange = (event) => {
        if(event.target.value === 'Bronx County'){
            this.setState({dropdownCounty: event.value, cities: bronxCountyCities})
        }
    }
    
    handleSubmit = (event) => {
        
        event.preventDefault()
        let data = this.state.apiData
        // console.log('submit button')
        
        let filteredData = data.filter(ele=> ele.city === this.state.dropdownCity)
        // return all names from filterData
        let names = []
        filteredData.map(ele => {
            return(names.push(`${ele.firstname} ${ele.lastname}`))
        })
        this.setState({names})
    }

    handleNameChange = (event) => {
        event.preventDefault()
        this.setState({dropdownName: event.value})
    }
    
    render() {
        // console.log(this.props.getSelectedName)
        // this.props.getSelectedName(this.state.dropdownName)
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

                <div className="p-grid p-dir-col">
                    
                    <div className="p-col-12 p-md-6 p-lg-3 p-shadow-24">
                        <h1>State</h1>
                        <Dropdown options={this.state.states} value={this.state.dropdownState} 
                            onChange={this.handleStateChange} 
                            autoWidth={false} 
                        />
                    </div>

                    <p></p>

                    <div className="p-col-12 p-md-6 p-lg-3 p-shadow-24">
                        <h1>County</h1>
                        <Dropdown options={this.state.counties} value={this.state.dropdownCounty} 
                        onChange={this.handleCountyChange} 
                        autoWidth={false} />
                    </div>
                    <p></p>

                    <div className="p-col-12 p-md-6 p-lg-3 p-shadow-24">
                        <h1>City</h1>
                        <Dropdown options={this.state.cities} value={this.state.dropdownCity}  autoWidth={false} 
                            onChange={(event) => this.setState({dropdownCity: event.value})}
                        />
                    </div>
                    <p></p>

                    <button onClick={this.handleSubmit}> Submit </button>
                    <p></p>
                    <div className="p-col-12 p-md-6 p-lg-3 p-shadow-24">
                        <h1>Select Your Name</h1>
                        <Dropdown 
                            options={this.state.names} 
                            value={this.state.dropdownName} 
                            onChange={this.handleNameChange}
                              
                            autoWidth={false} 
                        />
                    </div>

                </div>
                <Link to="/Voter/Ballot" >
                    <Button label="Go Vote!"/>
                </Link>
                
                {/* onClick={this.handleSubmit}  */}
           

                
            </>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState !== this.state){
            // this.props.getSelectedName(this.state.dropdownName)
            // console.log("working")
        }
    }
    

    componentDidMount() {
        fetch(APIURL)
            .then(res => res.json())
            .then(data => this.setState({apiData: data }))
    }
    
}
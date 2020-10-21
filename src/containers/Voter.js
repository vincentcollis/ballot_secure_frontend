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
        console.log('submit button')
        
        let filteredData = data.filter(ele=> ele.city === this.state.dropdownCity)
        // return all names from filterData
        let names = []
        filteredData.map(ele => {
            return(
                names.push(`${ele.firstname} ${ele.lastname}`)
            )
            // console.log(ele)
        })

        this.setState({names})
    }
    
    
    
    
    render() {
        console.log(this.state.names)
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
                        <Dropdown options={this.state.counties} value={this.state.dropdownCounty} 
                        onChange={this.handleCountyChange} 
                        autoWidth={false} />
                    </div>

                    <div className="p-col-4 card card-w-title">
                        <h1>City</h1>
                        <Dropdown options={this.state.cities} value={this.state.dropdownCity}  autoWidth={false} 
                            onChange={(event) => this.setState({dropdownCity: event.value})}
                        />
                    </div>

                    <button onClick={this.handleSubmit}> Submit </button>
                    
                    <div className="p-col-4 card card-w-title">
                        <h1>Select Your Name</h1>
                        <Dropdown 
                        options={this.state.names} 
                            value={this.state.dropdownName} 
                            onChange={event => this.setState({dropdownName: event.value})}
                              
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

    componentDidMount() {
        fetch(APIURL)
            .then(res => res.json())
            .then(data => this.setState({apiData: data }))
    }
    
}
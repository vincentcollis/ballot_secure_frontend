import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import {SelectButton} from 'primereact/selectbutton';


class MainPage extends Component {
    state= {
        selectedType: null,
        types: [
            {label: 'Voter', value: 'Voter'},
            {label: 'Administrator', value: 'Administrator'}
        ]
    }

    render() { 
        return (
           <div className='card'>
                <Button label="Admin" onClick={null}/>
                <Button label="Voter" onClick={null}/>
                <SelectButton value={this.state.selectedType} options={this.state.types} onChange={event => this.setState({selectedType: event.value})} />
           </div>

        );
    }
}
 
export default MainPage;
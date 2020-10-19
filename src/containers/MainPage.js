import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

class MainPage extends Component {

    render() { 
        return (
           <div>
                <Button label="Admin" onClick={null}/>
                <Button label="Voter" onClick={null}/>
           </div>

        );
    }
}
 
export default MainPage;
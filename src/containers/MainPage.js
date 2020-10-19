import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

class MainPage extends Component {
    state = {  }
    
    
    
    render() { 
        return (
            <div className="p-mb-2 p-d-block">
            <Card  title ='Voter or Admin' subTitile=" Choose if you are a voter.">
               <Button /> 
            </Card>
            </div>
        );
    }
}
 
export default MainPage;
import React, { Component } from 'react';
import { Button } from 'primereact/button';

import Login from '../pages/Login'

class MainPage extends Component {

constructor(props) {
    super(props)

    this.state = {
         loggedin: false
    }
}
    handleLoggin = (event) => {
        event.preventDefault()
        // Add authentication logic
        this.setState({loggedin:true})
    }
    
    render() { 
        return (
            <>
            {!this.state.loggedin? 
                <Login handleLoggin={this.handleLoggin}/>:
                <div>
                        <Button label="Admin" onClick={null}/>
                        <Button label="Voter" onClick={null}/>
                </div>
            }
        </>
        );
    }
}
 
export default MainPage;
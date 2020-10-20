import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";

import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';

import 'primereact/resources/primereact.min.css';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import MainPage from '../../containers/MainPage';


function NavBar(props) {
    let history = useHistory()

    const items = [
        {
            label: 'Edit Profile',
            icon: 'pi-user-edit'
        },
        {   label: 'Log In',
            icon: 'pi-times-circle',
            command: (e)=>{history.push("/main")}
        }
    ]

    return (
        <Router>

            <Toolbar>
                <Link to="/main">
                    <Button label="Home" className="p-button"/>
                </Link>
                <Link to="/about">
                    <Button label="About" className="p-button" />
                </Link>
                <i className="pi pi-bars p-toolbar-separator p-mr-2" />
                <SplitButton label="Account" icon="pi pi-check" model={items} className="p-button-warning"></SplitButton>
            </Toolbar>

            <Switch>
                <Route exactly path="/main" component={MainPage}/>
            </Switch>

        </Router>
        );
}

export default NavBar

                 
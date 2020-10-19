import React, { Component } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import classNames from 'classnames';
import 'primereact/resources/primereact.min.css';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
// import '../App.css';

export default class NavBar extends Component {

    constructor(props) {
        super(props);

        this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Delete',
                icon: 'pi pi-times'
            },
            {
                label: 'React Website',
                icon: 'pi pi-external-link',
                command: () => {
                    window.location.href = 'https://reactjs.org/'
                }
            },
            {   label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
                    window.location.hash = "/fileupload"
                }
            }
        ];
    }

    render() {
        const leftContents = (
            <React.Fragment>
                <Button label="New" icon="pi pi-plus" className="p-mr-2" />
                <Button label="Upload" icon="pi pi-upload" className="p-button-success" />
                <i className="pi pi-bars p-toolbar-separator p-mr-2" />
                <SplitButton label="Save" icon="pi pi-check" model={this.items} className="p-button-warning"></SplitButton>
            </React.Fragment>
        );

        const rightContents = (
            <React.Fragment>
                <Button icon="pi pi-search" className="p-mr-2" />
                <Button icon="pi pi-calendar" className="p-button-success p-mr-2" />
                <Button icon="pi pi-times" className="p-button-danger" />
            </React.Fragment>
        );

        return (
            <div>
                <Toolbar left={leftContents} right={rightContents} />
            </div>
        );
    }
}
                 
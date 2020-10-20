import React, {Component} from 'react';
import NavBar from '../components/visualizations/NavBar.js'
import MainPage from '../containers/MainPage.js'

export default class EmptyPage extends Component {

    render() {
        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <NavBar />
                    <MainPage />
                </div>
            </div>
        );
    }
}
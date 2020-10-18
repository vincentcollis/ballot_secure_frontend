import React, { Component } from 'react'

import Data001 from '../components/visualizations/Data001.js'
import Data002 from '../components/visualizations/Data002.js'
import Data003 from '../components/visualizations/Data003.js'

export default class Data_Panel extends Component {
    render() {
        return (
            <div>
                
                <Data001></Data001> <br></br>
                <Data002></Data002> <br></br>
                <Data003></Data003> <br></br>
            </div>
        )
    }
}

import React, { Component } from 'react';
import './Main.css';
import Navbar from './navbar/Navbar';
import Examples from './examples/Examples';

class Main extends Component {

    render() {
        return (
            <div id="outer">
                <Navbar />
                <div id="inner">
                    <Examples />
                </div>
            </div>
        )
    }
}

export default Main
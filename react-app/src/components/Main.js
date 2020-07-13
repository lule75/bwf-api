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
                    <div className="intro">
                        <p className="title">Up-to-date BWF World Rankings on demand.</p>
                        <p className="description">Get current and historical badminton world rankings alongside player statistics with BWF API</p>
                    </div>
                    <Examples />
                </div>

                <div className="summary">
                    <p><b>BWF API</b> is a simple and easy-to-use API that returns JSON metadata for current and historical <br/>badminton world rankings alongside detailed player information.</p>
                </div>
            </div>
        )
    }
}

export default Main
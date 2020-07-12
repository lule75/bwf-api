import React, { Component } from 'react';
import './Main.css';
import Navbar from './navbar/Navbar';

class Main extends Component {

    render() {
        return (
            <div id="outer">
                <Navbar />
                <div id="inner">
                    <h2>
                        Hi
                    </h2>
                </div>
            </div>
        )
    }
}

export default Main
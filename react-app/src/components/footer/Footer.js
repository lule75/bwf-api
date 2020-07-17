import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div className="footer-features1">
                    <p className="footer-features-title">Work In Progress</p>
                    <p className="info">Documentation<br />
                    GET requests for player bio<br />
                    GET requests for specific tournaments<br />
                    User accounts with unique API keys
                    </p>
                </div>

                <div className="footer-features2">
                    <p className="footer-features-title">Support</p>
                    <p className="info"><a href="mailto:raymondji@berkeley.edu" className="url">Contact</a><br /><br /><br />
                    <a href="https://github.com/raymondmengji/bwf-api" className="url">Github</a></p>
                </div>
            </div>
        )
    }
}

export default Footer
import React, { Component } from 'react';
import './Main.css';
import Navbar from './navbar/Navbar';
import Examples from './examples/Examples';
import FadeIn from 'react-fade-in';
import Footer from './footer/Footer';


class Main extends Component {

    render() {
        return (
            <FadeIn>
                <div id="outer">
                    <Navbar />
                    <div id="inner">
                        <div className="intro">
                            <p className="title">Up-to-date BWF World Rankings on demand</p>
                            <p className="description">Get current and historical badminton world rankings alongside player statistics with BWF API</p>
                        </div>
                        <Examples />
                    </div>

                    <div className="summary">
                        <p className="blurb"><b>BWF API</b> is a simple and easy-to-use API that returns JSON metadata for current and historical <br/>badminton world rankings alongside detailed player information.</p>

                        <div className="features">
                            <p className="features-title">Fast</p>
                            <p>Asynchronously cached for a fast response.</p>
                        </div>

                        <div className="features">
                            <p className="features-title">Easy Integration</p>
                            <p>Get JSON results with simple HTTP GET requests.</p>
                        </div>
                    </div>
                    <Footer />
                </div>
            </FadeIn>
        )
    }
}

export default Main
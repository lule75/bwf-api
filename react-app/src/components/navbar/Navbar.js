import React, { Component } from 'react';
import './Navbar.css';
import Logo from '../../bwf.png';


class Navbar extends Component {
    render() {
        return(
            <div id="navbar">
                <h1 id="title"><span class="child"><img id="logo" src={Logo} /> API</span></h1>
            </div>
        )
    }
}

export default Navbar
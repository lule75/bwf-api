import React, { Component } from "react";
import './Examples.css';
import JsonDisplay from '../json-display/JsonDisplay';

class Examples extends Component {
    render() {
        return (
            <div class="examples">
                <p>asdf</p>
                <div class="link">
                    <h2>link</h2>
                </div>
                <div class="json">
                    <JsonDisplay event="men-singles" year="2018" month="10" rows="10" />
                </div>
            </div>
        )
    }
}

export default Examples
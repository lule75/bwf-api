import React, { Component } from "react";
import './Examples.css';
import JsonDisplay from '../json-display/JsonDisplay';

class Examples extends Component {

    constructor(props) {
        super(props)

        var today = new Date()
        var year = today.getFullYear()
        var month = today.getMonth()

        this.state = {
            year: year,
            month: month
        }
    }


    render() {
        return (
            <> 
                <p><span class="feature-text">Option to choose between events...</span></p>

                <div className="examples">
                    <p>Top 10 men's singles players in the world right now</p>
                    <div className="link">
                        <p>http://localhost:3000/men-singles/{this.state.year}/{this.state.month}/10</p>
                    </div>
                    <div className="json">
                        <JsonDisplay event="men-singles" year={this.state.year} month={this.state.month} rows="10" />
                    </div>
                </div>

                <p><span class="feature-text">Ability to get historical data...</span></p>

                <div className="examples">
                    <p>Top 10 women's doubles pairs during March 2013</p>
                    <div className="link">
                        <p>http://localhost:3000/women-doubles/2013/3/10</p>
                    </div>
                    <div className="json">
                        <JsonDisplay event="women-doubles" year="2013" month="3" rows="10" />
                    </div>
                </div>

                <p><span class="feature-text">And a custom number of top players</span></p>

                <div className="examples">
                    <p>Top 25 mixed doubles pairs in the world right now</p>
                    <div className="link">
                        <p>http://localhost:3000/mixed-doubles/{this.state.year}/{this.state.month}/25</p>
                    </div>
                    <div className="json">
                        <JsonDisplay event="mixed-doubles" year={this.state.year} month={this.state.month} rows="25" />
                    </div>
                </div>
            </>
        )
    }
}

export default Examples
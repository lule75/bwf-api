import React, { Component } from "react";
import './Examples.css';
import JsonDisplay from '../json-display/JsonDisplay';
import Getbutton from '../getbutton/Getbutton';

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
                <p><span className="feature-text">Option to choose between events...</span></p>

                <div className="examples">
                    <p>Top 25 men's singles players in the world right now</p>
                    <div className="link">
                        <Getbutton />
                        <p className="get-request">http://localhost:3000/men-singles</p>
                    </div>
                    <div className="json">
                        <JsonDisplay event="men-singles" />
                    </div>
                </div>

                <p><span className="feature-text">Ability to get historical data...</span></p>

                <div className="examples">
                    <p>Top 25 women's doubles pairs during March 2013</p>
                    <div className="link">
                        <Getbutton />
                        <p className="get-request">http://localhost:3000/women-doubles/2013/3</p>
                    </div>
                    <div className="json">
                        <JsonDisplay event="women-doubles" year="2013" month="3" />
                    </div>
                </div>

                <p><span className="feature-text">Ability to get a custom number of top players...</span></p>

                <div className="examples">
                    <p>Top 18 mixed doubles pairs in the world right now</p>
                    <div className="link">
                        <Getbutton />
                        <p className="get-request">http://localhost:3000/mixed-doubles/18</p>
                    </div>
                    <div className="json">
                        <JsonDisplay event="mixed-doubles" rows="18" />
                    </div>
                </div>

                <p><span className="feature-text">And the ability to do both</span></p>

                <div className="examples">
                    <p>Top 5 women's singles players during November 2017</p>
                    <div className="link">
                        <Getbutton />
                        <p className="get-request">http://localhost:3000/women-singles/2017/11/5</p>
                    </div>
                    <div className="json">
                        <JsonDisplay event="women-singles" year="2017" month="11" rows="5" />
                    </div>
                </div>
            </>
        )
    }
}

export default Examples
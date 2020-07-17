import React, { Component } from "react";
import './Examples.css';
import JsonDisplay from '../json-display/JsonDisplay';
import Getbutton from '../getbutton/Getbutton';

class Examples extends Component {

    render() {
        return (
            <> 
                <p><span className="feature-text">Choose between events...</span></p>

                <div className="examples">
                    <p>Top 10 men's singles players in the world right now</p>
                    <div className="link">
                        <Getbutton />
                        <p className="get-request">http://localhost:3000/men-singles</p>
                    </div>
                    <div className="json">
                        <JsonDisplay event="men-singles" />
                    </div>
                </div>

                <p><span className="feature-text">Get historical data...</span></p>

                <div className="examples">
                    <p>Top 10 women's doubles pairs during week #3 of 2013</p>
                    <div className="link">
                        <Getbutton />
                        <p className="get-request">http://localhost:3000/women-doubles/2013/3</p>
                    </div>
                    <div className="json">
                        <JsonDisplay event="women-doubles" year="2013" week="3" />
                    </div>
                </div>

                <p><span className="feature-text">Get a custom number of top players...</span></p>

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

                <p><span className="feature-text">And the ability to do all options</span></p>

                <div className="examples">
                    <p>Top 5 women's singles players during week #38 of 2017</p>
                    <div className="link">
                        <Getbutton />
                        <p className="get-request">http://localhost:3000/women-singles/2017/38/5</p>
                    </div>
                    <div className="json">
                        <JsonDisplay event="women-singles" year="2017" week="38" rows="5" />
                    </div>
                </div>
            </>
        )
    }
}

export default Examples
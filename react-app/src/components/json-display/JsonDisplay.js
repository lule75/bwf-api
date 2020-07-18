import React, { Component } from 'react';
import ReactJson from 'react-json-view';
import CircularProgress from '@material-ui/core/CircularProgress';
import './JsonDisplay.css';

class JsonDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notRan: true,
            json: null
        }
    }

    getRanking() {
        const {event, year, week, rows} = this.props    
        
        if (typeof year == 'undefined' && typeof week == 'undefined' && typeof rows == 'undefined') {
            return fetch(`/api/${event}`).then(data => data.json()).then(json => {
                this.setState({ notRan: false, json})
            })
        }
        else if (typeof year == 'undefined' && typeof week == 'undefined') {
            return fetch(`/api/${event}/${rows}`).then(data => data.json()).then(json => {
                this.setState({ notRan: false, json})
            })
        }
        else if (typeof rows == 'undefined') {
            return fetch(`/api/${event}/${year}/${week}`).then(data => data.json()).then(json => {
                this.setState({ notRan: false, json})
            })
        }
        return fetch(`/api/${event}/${year}/${week}/${rows}`).then(data => data.json()).then(json => {
            this.setState({ notRan: false, json})
        })
    }

    render() {

        if (this.state.notRan) {
            this.getRanking()
            return (
                <div className="loading-circle">
                    <CircularProgress />
                </div>
            )
        }
        else {
            return(
                <ReactJson src={this.state.json} />

            )
        }
        
    }
}

export default JsonDisplay
import React, { Component } from 'react';
import ReactJson from 'react-json-view';
import CircularProgress from '@material-ui/core/CircularProgress';
import './JsonFile.css';

class JsonDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notRan: true,
            json: null
        }
    }

    getRanking() {
        console.log(this.props.params)
        const {event, year, month, rows} = this.props
        return fetch(`/${event}/${year}/${month}/${rows}`).then(data => data.json()).then(json => {
            console.log(json)
            this.setState({ notRan: false, json})
        })
    }

    render() {

        if (this.state.notRan) {
            this.getRanking()
            return (
                <div class="loading">
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
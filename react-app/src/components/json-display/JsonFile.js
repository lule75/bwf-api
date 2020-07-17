import React, { Component } from 'react';
import ReactJson from 'react-json-view';
import CircularProgress from '@material-ui/core/CircularProgress';
import './JsonFile.css';


class JsonFile extends Component{
    
    constructor(props) {
        super(props)
        this.state = {
            notRan: true,
            json: null
        }
    }

    getRanking() {
        const {event, year, month, rows} = this.props.match.params
        return fetch(`/${event}/${year}/${month}/${rows}`).then(data => data.json()).then(json => {
            this.setState({ notRan: false, json})
        })
    }

    render() {

        if (this.state.notRan) {
            this.getRanking()
            return (
                <div className="loading">
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

export default JsonFile
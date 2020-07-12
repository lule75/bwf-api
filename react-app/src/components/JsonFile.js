import React, { Component } from 'react';
import ReactJson from 'react-json-view';

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
            console.log(json)
            this.setState({ notRan: false, json})
        })
    }

    render() {

        if (this.state.notRan) {
            this.getRanking()
            return (
                <></>
            )
        }
        else {
            return(
                <>
                    <ReactJson src={this.state.json} />
                </>
            )
        }
        
    }
}

export default JsonFile
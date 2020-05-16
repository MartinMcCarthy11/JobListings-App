import React, { Component } from 'react'

export default class JobRole extends Component {

    render() {
        return (
            <div className="job-description-row">
                <h3 className="job-role" onClick={this.props.onSelection}>{this.props.jobRole}</h3>
            </div>       
        )
    }
}

import React, { Component } from 'react'

export default class JobDetails extends Component {
    render() {
        return (
            <div className="flex-row job-description-row">
                <span className="job-detail-item">{this.props.jobAge}  </span>
                <span className="job-detail-item">{this.props.jobContract}</span>
                <span className="job-detail-item">{this.props.joblocation}</span>
            </div>
        )
    }
}

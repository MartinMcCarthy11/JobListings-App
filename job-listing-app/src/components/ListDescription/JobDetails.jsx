import React, { Component } from 'react'

export default class JobDetails extends Component {
    render() {
        const {jobAge, jobContract, joblocation} = this.props;
        return (
            <div className="flex-row job-description-row">
                <span className="job-detail-item">{jobAge}  </span>
                <span className="job-detail-item">{jobContract}</span>
                <span className="job-detail-item">{joblocation}</span>
            </div>
        )
    }
}

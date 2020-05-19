import React, { Component } from 'react'

export default class JobDetails extends Component {
    render() {
        const {jobAge, jobContract, joblocation} = this.props;
        return (
            <div className="flex-row job-description-row">
                <span className="job-detail__item job-detail__item--details">{jobAge}  </span>
                <span className="job-detail__item job-detail__item--details">{jobContract}</span>
                <span className="job-detail__item job-detail__item--details">{joblocation}</span>
            </div>
        )
    }
}

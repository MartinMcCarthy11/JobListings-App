import React from 'react'

export const JobDetails = ({jobAge, jobContract, joblocation}) => {
    return (
        <div className="flex-row job-description-row">
                <span className="job-detail__item job-detail__item--details">{jobAge}  </span>
                <span className="job-detail__item job-detail__item--details">{jobContract}</span>
                <span className="job-detail__item job-detail__item--details">{joblocation}</span>
            </div>
    )
}

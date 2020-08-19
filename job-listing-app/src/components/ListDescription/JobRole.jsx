import React from 'react'

export const JobRole = ({jobId, jobRole, onCompanySelection}) => {
    return (
        <div className="job-description-row">
                <h3 className="job-role" onClick={() => onCompanySelection(jobId)} >{jobRole}</h3>
        </div> 
    )
}

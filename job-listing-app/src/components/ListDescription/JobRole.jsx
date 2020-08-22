import React from 'react'
import PropTypes from 'prop-types'

export const JobRole = ({jobId, jobRole, onCompanySelection}) => {
    return (
        <div className="job-description-row">
                <h3 className="job-role" onClick={() => onCompanySelection(jobId)} >{jobRole}</h3>
        </div> 
    )
}

JobRole.propTypes = {
    jobId: PropTypes.number.isRequired,
    jobRole: PropTypes.string.isRequired,
    onCompanySelection: PropTypes.func
}
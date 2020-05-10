import React, { Component } from 'react'

export default class JobCompany extends Component {
    
    isNew(){
        return this.props.jobTagNew === true ? "New" : "";
    }

    isFeatured(){
        return this.props.jobTagFeatured === true ? "Featured" : "";
    }
    
    render() {
        return (
            <div className="flex-row job-description-row">
                <span className="job-detail-item">{this.props.jobcompany}</span>
                <span className="job-detail-item">{this.isNew()}</span>
                <span className="job-detail-item">{this.isFeatured()}</span>
            </div>
        )
    }
}

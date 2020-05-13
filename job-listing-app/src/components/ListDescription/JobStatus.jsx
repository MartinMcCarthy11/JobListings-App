import React, { Component } from 'react'

export default class JobStatus extends Component {
    
    isNew(){
        return this.props.jobTagNew === true ? "New!" : "";
    }

    isFeatured(){
        return this.props.jobTagFeatured === true ? "Featured" : "";
    }

    newClassList(){
        if (this.props.jobTagNew) {
            return "job-detail__item job-detail__item--new"
        }
    }

    featuredClassList(){
        if (this.props.jobTagFeatured) {
            return "job-detail__item job-detail__item--featured"
        }
    }
    
    render() {
        return (
            <div className="flex-row job-description-row">
                <span className="job-detail__item">{this.props.jobcompany}</span>
                <span className={this.newClassList()}>{this.isNew()}</span>
                <span className={this.featuredClassList()}>{this.isFeatured()}</span>
            </div>
        )
    }
}

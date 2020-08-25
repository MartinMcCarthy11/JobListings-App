import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class JobStatus extends Component {
    isNew(){
        return this.props.jobTagNew ? "New!" : "";
    }

    isFeatured(){
        return this.props.jobTagFeatured ? "Featured" : "";
    }

    newClassList = () => {
        return this.props.jobTagNew ? "job-detail__item job-detail__item--new": "job-detail__item ";
    }

    featuredClassList = () => {
        return this.props.jobTagFeatured ? "job-detail__item job-detail__item--featured" : "job-detail__item";
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

JobStatus.propTypes = {
    jobTagNew: PropTypes.bool,
    jobTagFeatured: PropTypes.bool,
    jobcompany: PropTypes.string
}
import React, { Component } from 'react'
import ListSkills from './ListSkills';
import ListImage from './ListImage';
import JobRole from './ListDescription/JobRole';
import JobDetails from './ListDescription/JobDetails';
import JobCompany from './ListDescription/JobCompany';

export default class ListItem extends Component {

    render() {
        return (
            
            <div className="list-item">
                <div>
                    <ListImage listImage = {this.props.jobListSkills.logo}/>
                </div>
                <div className="list-description">
                    <React.Fragment>
                        <JobCompany
                            jobcompany = {this.props.jobListSkills.company}
                            jobTagNew = {this.props.jobListSkills.new}
                            jobTagFeatured = {this.props.jobListSkills.featured}
                        />
                    </React.Fragment>
                    <React.Fragment>
                        <JobRole jobRole = {this.props.jobListSkills.role}/>
                    </React.Fragment>
                    <React.Fragment>
                        <JobDetails 
                            jobAge = {this.props.jobListSkills.postedAt}
                            jobContract = {this.props.jobListSkills.contract}
                            joblocation = {this.props.jobListSkills.location}
                            />
                    </React.Fragment>
                </div>
                <div className="skills-list-container">
                    <ul className="skills-list">
                            <ListSkills  jobSkills = {this.props.jobListSkills.languages}/>
                    </ul>
                </div>        
            </div>
  
        )
    }
}

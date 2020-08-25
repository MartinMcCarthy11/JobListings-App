import React, { Component } from 'react'
import {ListSkills} from './ListSkills';
import {ListImage} from './ListImage';
import {JobRole} from './ListDescription/JobRole';
import {JobDetails} from './ListDescription/JobDetails';
import JobStatus from './ListDescription/JobStatus';

export default class ListItem extends Component {

    render() {
        const {logo, company, featured, position, postedAt, contract, location, languages, level, role, id} = this.props.jobListSkills;
        let className = this.props.active === id ? 'list-item list-item-focus' : 'list-item';
        return (
            
            <div className={className}>
                <div className="list-image">
                    <ListImage listImage = {logo}/>
                </div>
                <div className="list-description">
                    <React.Fragment>
                        <JobStatus
                            jobcompany = {company}
                            jobTagNew = {this.props.jobListSkills.new}
                            jobTagFeatured = {featured}
                        />
                    </React.Fragment>
                    <React.Fragment>
                        <JobRole 
                            jobRole = {position}
                            jobId = {id}
                            onCompanySelection= {this.props.onCompanySelection}/>
                    </React.Fragment>
                    <React.Fragment>
                        <JobDetails 
                            jobAge = {postedAt}
                            jobContract = {contract}
                            joblocation = {location}
                            />
                    </React.Fragment>
                </div>
                <div className="skills-list-container">
                    <ul className="skills-list">
                            <ListSkills  
                            jobSkills = {languages}
                            jobLevel = {level}
                            jobRole = {role}
                            onSkillSelection = {this.props.onSkillSelection}/>
                    </ul>
                </div>        
            </div>
  
        )
    }
}

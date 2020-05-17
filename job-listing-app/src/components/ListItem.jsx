import React, { Component } from 'react'
import ListSkills from './ListSkills';
import ListImage from './ListImage';
import JobRole from './ListDescription/JobRole';
import JobDetails from './ListDescription/JobDetails';
import JobStatus from './ListDescription/JobStatus';

export default class ListItem extends Component {
    state = {clicked: false}
    componentDidMount(){
        this.setState({clicked: false})
      }

    handleSelection = () => {
        console.log("Item Clicked");
        if (this.state.clicked === false) {
            this.setState({clicked: true});
        }else{
            this.setState({clicked: false});
        }
    }

    render() {
        const {logo, company, featured, position, postedAt, contract, location, languages, level, role} = this.props.jobListSkills;
        let className = this.state.clicked ? 'list-item list-item-focus' : 'list-item';
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
                            onSelection = {this.handleSelection}/>
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
                            jobRole = {role}/>
                    </ul>
                </div>        
            </div>
  
        )
    }
}

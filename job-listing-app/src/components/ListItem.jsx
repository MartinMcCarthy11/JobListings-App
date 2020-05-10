import React, { Component } from 'react'
import ListSkills from './ListSkills';
import ListImage from './ListImage';
import JobRole from './ListDescription/JobRole';
import JobDetails from './ListDescription/JobDetails';
import JobCompany from './ListDescription/JobCompany';

export default class ListItem extends Component {
    state = {clicked: false}
    componentDidMount(){
        this.setState({clicked: false})
      }

    handleClick = () =>{
        if (this.state.clicked === false) {
            this.setState({clicked: true});
        }else{
            this.setState({clicked: false});
        }
        
      }
    render() {
        var className = this.state.clicked ? 'list-item list-item-focus' : 'list-item';
        return (
            
            <div onClick={this.handleClick} className={className}>
                <div className="list-image">
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
                        <JobRole 
                            jobRole = {this.props.jobListSkills.position}/>
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
                            <ListSkills  
                            jobSkills = {this.props.jobListSkills.languages}
                            jobLevel = {this.props.jobListSkills.level}
                            jobRole = {this.props.jobListSkills.role}/>
                    </ul>
                </div>        
            </div>
  
        )
    }
}

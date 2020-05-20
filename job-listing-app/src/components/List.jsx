import React, { Component } from 'react'
import ListItem from './ListItem';

class List extends Component {
    render(){
        console.log(this.props.active);
        return (  
        <div>   
            <React.Fragment>
                <ul>
                    {this.props.jobList.map(job => (
                        <ListItem key={job.id} jobListSkills = {job} onSkillSelection = {this.props.onSkillSelection} onCompanySelection={this.props.onCompanySelection} active={this.props.active}/> 
                    ))}                               
                </ul>
            </React.Fragment>
        </div>
           
        )
    }
    
    
}

export default List;
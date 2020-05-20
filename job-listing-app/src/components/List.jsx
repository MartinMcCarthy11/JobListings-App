import React, { Component } from 'react'
import ListItem from './ListItem';

class List extends Component {
    render(){
        return (  
        <div>   
            <React.Fragment>
                <ul>
                    {this.props.jobList.map(job => (
                        <ListItem key={job.id} jobListSkills = {job} onSkillSelection = {this.props.onSkillSelection} onCompanySelection={this.props.onCompanySelection}/> 
                    ))}                               
                </ul>
            </React.Fragment>
        </div>
           
        )
    }
    
    
}

export default List;
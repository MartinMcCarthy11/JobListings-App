import React, { Component } from 'react'
import ListItem from './ListItem';

class List extends Component {
    state = {
        selectedSkills: [],
        allSkills: []
    }
    
    static getDerivedStateFromProps(props){
        const skills = props.jobList.flatMap(o => o.languages).filter(x => x !== undefined);
        const level = props.jobList.flatMap(o => o.role);
        const role = props.jobList.flatMap(o => o.level);
        const mergedArray =[...role, ...level, ...skills];
        const allSkills =  [...new Set(mergedArray)];
        return {allSkills : allSkills};
    }

    onSkillSelection = () => {
        console.log("Skill Clicked");
    }
    render(){
        return (  
        <div>   
            <React.Fragment>
                <ul>
                    {this.props.jobList.map(job => (
                        <ListItem key={job.id} jobListSkills = {job} onSkillSelection = {this.onSkillSelection}/> 
                    ))}                               
                </ul>
            </React.Fragment>
        </div>
           
        )
    }
    
    
}

export default List;
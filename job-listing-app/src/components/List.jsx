import React, { Component } from 'react'
//import ListImage from './ListImage';
import ListItem from './ListItem';

class List extends Component {
      
    render(){
        return (        
            <ul>
                {this.props.jobList.map(job => (
                    <ListItem jobListSkills = {job}/> 
                ))}                               
            </ul>
        )
    }
    
    
}

export default List;
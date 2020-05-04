import React, { Component } from 'react'
//import ListImage from './ListImage';
import ListItem from './ListItem';

class List extends Component {
      
    render(){
        return (        
            <ul>
                <ListItem jobListSkills = {this.props.jobList}/>                
            </ul>
        )
    }
    
    
}

export default List;
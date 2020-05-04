import React, { Component } from 'react'
import ListSkills from './ListSkills';
import ListImage from './ListImage';


export default class ListItem extends Component {

    render() {
        return (
            
            <div className="list-item">
                <div>
                    <ListImage listImage = {this.props.jobListSkills.logo}/>
                </div>
                <div></div>
                <div>
                    <ul className="skills-list">
                            <ListSkills  jobSkills = {this.props.jobListSkills.languages}/>
                    </ul>
                </div>        
            </div>
  
        )
    }
}

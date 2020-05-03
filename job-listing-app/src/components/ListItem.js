import React, { Component } from 'react'
import ListSkills from './ListSkills';


export default class ListItem extends Component {
    render() {
        return (
            <ul>
                <ListSkills jobListSkills = {this.props.jobListSkills}/>
            </ul>
        )
    }
}

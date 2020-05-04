import React, { Component } from 'react'
import ListSkills from './ListSkills';


export default class ListItem extends Component {
    getStyle = () => {
        return {
            display: "flex",
            flexDirection: "row",
            justifyContent : "space-between",
            background: "#f4f4f4",
            padding: "20px",
            margin: "20px",
            borderBottom: "1px #ccc dotted",
        };
      };

    render() {
        return (
            
            <div style = {this.getStyle()}>
                    <div></div>{/* Image */}
                    <div></div>{/* Job Description */}
                    <ListSkills  jobListSkills = {this.props.jobListSkills}/>
                </div>
  
        )
    }
}

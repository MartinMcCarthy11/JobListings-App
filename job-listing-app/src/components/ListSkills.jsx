import React, { Component } from 'react'

 class ListSkills extends Component {
    render(){
          return this.props.jobSkills.map(x => <li className="skill">{x}</li>) 
    }
 }

export default ListSkills;
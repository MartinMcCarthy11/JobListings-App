import React, { Component } from 'react'

 class ListSkills extends Component {
    render(){
      const arr = [this.props.jobLevel, this.props.jobRole, ...this.props.jobSkills]
      return arr.map(x => <li key={`${x}1`} className="skill">{x}</li>)
   }
 }

export default ListSkills;
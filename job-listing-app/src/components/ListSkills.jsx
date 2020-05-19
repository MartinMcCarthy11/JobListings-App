import React, { Component } from 'react'

 class ListSkills extends Component {
    render(){
      const {jobLevel, jobRole, jobSkills} = this.props;

      let arr = [];
      if(this.props.jobSkills !== undefined){
        arr = [jobLevel, jobRole, ...jobSkills]
      }else{
        arr = []
      }
      return arr.map(x => <li key={`${x}1`} className="skill" onClick={this.props.onSkillSelection}>{x}</li>)
   }
 }

export default ListSkills;
import React, { Component } from 'react'

 class ListSkills extends Component {
    render(){
      let arr = [];
      if(this.props.jobSkills !== undefined){
        arr = [this.props.jobLevel, this.props.jobRole, ...this.props.jobSkills]
      }else{
        arr = []
      }
      
      return arr.map(x => <li key={`${x}1`} className="skill">{x}</li>)
   }
 }

export default ListSkills;
import React, { Component } from 'react'

 class ListSkills extends Component {
    getStyle = () => {
        return {
            display: "flex",
            flexDirection: "row"   ,
            listStyle: "none",         
        };
      };

    
    render(){
        
        const array = this.props.jobListSkills;
        var skills = array.filter(function(obj) {
            if ('languages' in obj) {
              return true;
            } else {
              return false;
            }
          }).map(function(obj) { return obj['languages'][0]; });
      
          return (
            <ul style = {this.getStyle()}>
                {skills.map(x => <li className="skill">{x}</li>)}
            </ul>
          )
          
            
                  
       
    }
 }


export default ListSkills;
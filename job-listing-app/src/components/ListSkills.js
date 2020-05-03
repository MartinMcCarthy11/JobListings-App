import React, { Component } from 'react'

 class ListSkills extends Component {
     
    
    render(){
        
        const array = this.props.jobListSkills;
        var skills = array.filter(function(obj) {
            if ('languages' in obj) {
              return true;
            } else {
              return false;
            }
          }).map(function(obj) { return obj['languages'][0]; });

          console.log(skills.map(x => `<li>${x}</li>`));
      
          return skills.map(x => <li>{x}</li>)}  
                  
       
    }



export default ListSkills;
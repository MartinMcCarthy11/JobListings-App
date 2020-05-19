import React, { Component } from 'react';
import List from './components/List';
import jobsListData from './data.json';
import './App.scss';

class App extends Component {
  state = {
    jobList:[],
    selectedSkills: [],
    allSkills: []
  }

  componentWillMount(){
    this.setState({jobList:jobsListData})
  }

  componentDidMount(){
    const skills = this.state.jobList.flatMap(o => o.languages).filter(x => x !== undefined);
    const level = this.state.jobList.flatMap(o => o.role);
    const role = this.state.jobList.flatMap(o => o.level);
    const mergedArray =[...role, ...level, ...skills];
    const allSkills =  [...new Set(mergedArray)];
    this.setState({allSkills});
  }

  onSkillSelection = (skill) => {
        let selectedSkills = [...this.state.selectedSkills];
        selectedSkills.push(Object.values(skill)[0])
        selectedSkills = [...new Set(selectedSkills)]
        this.setState({selectedSkills })
    }

  filterSkills = (allSkills, filterSkills) =>{
    return allSkills.filter(f => !filterSkills.includes(f));
  }

  filterJobs = (filterSkills, jobs) => {
    return null;
  }
  
  render(){
    let filterSkills = this.filterSkills(this.state.allSkills, this.state.selectedSkills);


    console.log(this.filterJobs(filterSkills,this.state.jobList ));

    return (    
      <div className="App">
        <div className="main-container">
          <List jobList = {this.state.jobList} onSkillSelection = {this.onSkillSelection}/>  
        </div>        
               
      </div>
    )
  }
  
}



export default App;

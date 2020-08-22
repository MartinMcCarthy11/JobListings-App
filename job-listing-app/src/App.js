import React, { Component } from 'react';
import List from './components/List';
import FilterList from './components/FilterList';
import jobsListData from './data.json';
import './App.scss';

class App extends Component {
  state = {
    jobList:[],
    selectedSkills: [],
    allSkills: [],
    
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

  handleSkillSelection = (skill) => {
        let selectedSkills = [...this.state.selectedSkills];
        selectedSkills.push(Object.values(skill)[0])
        selectedSkills = [...new Set(selectedSkills)]
        this.setState({selectedSkills })
    }

  filteredSkills = (allSkills, filterSkills) =>{
    return allSkills.filter(f => filterSkills.includes(f));
  }

  filterJobs = (filterSkills, jobs) => {
    let filteredArray = [...jobs].filter((element) => element.languages);
    let arr = filteredArray.map(({languages, id}) => ({languages, id}));
    let arr1 = filterSkills.length > 0 ? arr.filter(x => x.languages.some(r=> filterSkills.includes(r))) : arr;
    let arr2 = arr1.map(x => x.id);

    let result = jobs.filter(job => {
      if( arr2.indexOf(job.id) !== -1){
        return job
      }
    })

    if (result.length !== jobs.length){
      this.setState({jobList: result})
    }
  }
  
  handleClearAllFilter = () => {
    this.setState({selectedSkills : []});
  }

  handleClearFilter = (skill) => {
    let selectedSkills = [...this.state.selectedSkills];
    const index = selectedSkills.indexOf(skill);
    selectedSkills.splice(index, 1);
    this.setState({selectedSkills })
  }


  render(){
    let filterSkills = this.filteredSkills(this.state.allSkills, this.state.selectedSkills);
    console.log(filterSkills)
    this.filterJobs(filterSkills, this.state.jobList);


    return (    
      <div className="App">
        <div className="background"></div>
        <div className="main-container">
          <FilterList 
            selectedSkills = {this.state.selectedSkills}
            onClearSkills = {this.handleClearAllFilter} 
            onClearSkill = {this.handleClearFilter}/>
          <List 
            jobList = {this.state.jobList} 
            onSkillSelection = {this.handleSkillSelection}/>  
        </div>        
               
      </div>
    )
  }
  
}



export default App;

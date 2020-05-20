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
    ids: [],
    activeId: 0
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

    const ids = this.state.jobList.flatMap(o => o.id);
    this.setState({ids});
  }

  handleSkillSelection = (skill) => {
        let selectedSkills = [...this.state.selectedSkills];
        selectedSkills.push(Object.values(skill)[0])
        selectedSkills = [...new Set(selectedSkills)]
        this.setState({selectedSkills })
    }

  filterSkills = (allSkills, filterSkills) =>{
    return allSkills.filter(f => !filterSkills.includes(f));
  }

  filterJobs = (filterSkills, jobs) => {
    let filteredArray = [...jobs].filter((element) => element.languages);


    let arr = filteredArray.map(({languages, id}) => ({languages, id}));
    let arr1 = arr.filter(x => x.languages.includes("Python"));
    let arr2 = arr1.map(x => x.id);
    let result = jobs.filter(job => {
      if( arr2.indexOf(job.id) !== -1){
        return job
      }
    })
    this.setState({jobList: result})
    /* .filter(a => a === "JavaScript"); */
    //return filteredArray;
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

  handleCompanySelection = (id) => {
    this.setState({activeId : id})
  }

  render(){
    let filterSkills = this.filterSkills(this.state.allSkills, this.state.selectedSkills);
    console.log(this.filterJobs(filterSkills, this.state.jobList))


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
            onSkillSelection = {this.handleSkillSelection} 
            onCompanySelection={this.handleCompanySelection} 
            active={this.state.activeId}/>  
        </div>        
               
      </div>
    )
  }
  
}



export default App;

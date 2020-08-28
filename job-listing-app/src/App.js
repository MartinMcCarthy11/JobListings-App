import React, { Component } from 'react';
import List from './components/List';
import {FilterList} from './components/FilterList';
import jobsListData from './data.json';
import './App.scss';

export default class App extends Component {
  state = {
    jobList:[],
    selectedTags: [],
    allTags: [],
    
  }

  componentWillMount(){
    this.setState({jobList:jobsListData})
  }

  componentDidMount(){
    const skills = this.state.jobList.flatMap(o => o.languages).filter(x => x !== undefined);
    const level = this.state.jobList.flatMap(o => o.role);
    const role = this.state.jobList.flatMap(o => o.level);
    const mergedArray =[...role, ...level, ...skills];
    const allTags =  [...new Set(mergedArray)];
    this.setState({allTags});
  }

  handleTagSelection = (skill) => {
        let selectedTags = [...this.state.selectedTags];
        selectedTags.push(Object.values(skill)[0])
        selectedTags = [...new Set(selectedTags)]
        this.setState({selectedTags })
    }

  filteredTags = (allTags, filterTag) =>{
    return allTags.filter(tag => filterTag.includes(tag));
  }

  filterJobs = (filterTags, jobs) => {
    let filteredArray = [...jobs].filter((e) => e.languages);
    let arr = filteredArray.map(({languages, id}) => ({languages, id}));
    let arr1 = filterTags.length > 0 ? arr.filter(x => x.languages.some(r=> filterTags.includes(r))) : arr;
    let arr2 = arr1.map(x => x.id);

    let result = jobs.filter(job => {
      return arr2.indexOf(job.id) !== -1 ? job : "";
    })

    if (result.length !== jobs.length){
      this.setState({jobList: result})
    }
  }
  
  handleClearAllFilter = () => {
    this.setState({
      selectedTags : [],
      jobList:jobsListData
    });
  }

  handleClearFilter = (skill) => {
    let selectedTags = [...this.state.selectedTags];
    const index = selectedTags.indexOf(skill);
    selectedTags.splice(index, 1);
    this.setState({selectedTags })
  }


  render(){
    let filterTags = this.filteredTags(this.state.allTags, this.state.selectedTags);
    //console.log(filterTags)
    this.filterJobs(filterTags, this.state.jobList);


    return (    
      <div className="App">
        <div className="background"></div>
        <div className="main-container">
          <FilterList 
            selectedTags = {this.state.selectedTags}
            onClearTags = {this.handleClearAllFilter} 
            onClearTag = {this.handleClearFilter}/>
          <List 
            jobList = {this.state.jobList} 
            onTagSelection = {this.handleTagSelection}/>  
        </div>        
               
      </div>
    )
  }
  
}
import React, { Component } from 'react';
import List from './components/List';
import jobsListData from './data.json';
import './App.scss';

class App extends Component {
  state = {jobList:[]}

  componentDidMount(){
    this.setState({jobList:jobsListData})
  }
  
  render(){
    return (    
      <div className="App">
        <div className="main-container">
          <List jobList = {this.state.jobList}/>  
        </div>        
               
      </div>
    )
  }
  
}



export default App;

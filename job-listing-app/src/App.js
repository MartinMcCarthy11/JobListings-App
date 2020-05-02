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
    //const list = this.state.jobList.map(d => <li>{d.company}</li>);
    return (    
      <div className="App">
        <ul>
         <List jobList = {this.state.jobList}/>
        </ul>
      </div>
    )
  }
  
}



export default App;

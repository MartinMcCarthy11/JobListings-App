import React, { Component } from 'react'
import {ListItem} from './ListItem';

class List extends Component {
    state = {
        ids: [],
        activeId: 0
    }

    componentDidMount(){
        const ids = this.props.jobList.flatMap(o => o.id);
        this.setState({ids});
    }

    handleCompanySelection = (id) => {
        id !== this.state.activeId ? this.setState({activeId : id}) : this.setState({activeId : 0});
        
      }

    render(){
        return (  
        <div>   
            <React.Fragment>
                <ul>
                    {this.props.jobList.map(job => (
                        <ListItem key={job.id} jobListSkills = {job} onSkillSelection = {this.props.onSkillSelection} onCompanySelection={this.handleCompanySelection} active={this.state.activeId}/> 
                    ))}                               
                </ul>
            </React.Fragment>
        </div>
           
        )
    }
    
    
}

export default List;
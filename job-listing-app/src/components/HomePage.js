import React, { useState } from 'react';
import List from './List';
import { FilterList } from './FilterList';
import jobsListData from '../data.json';
import { useTagList } from '../context/ListContext';

const App = () => {
	const [jobList, setJobList] = useState(jobsListData);
	const {
		tagList,
		saveTagList,
		saveFilteredTagList,
		clearTags,
	} = useTagList();

	const onClearTag = (skill) => {
		let filtered = [...new Set(tagList)].filter((x) => x !== skill);
		saveFilteredTagList(filtered);
	};

	const onClearAllTags = () => {
		clearTags();
	};

	return (
		<div className='App'>
			<div className='background'></div>
			<div className='main-container'>
				<FilterList
					selectedTags={[...new Set(tagList)]}
					onClearAllTags={onClearAllTags}
					onClearTag={onClearTag}
				/>
				<List
					jobList={jobList}
					// onTagSelection = {this.handleTagSelection}
				/>
			</div>
		</div>
	);
};

export default App;
// export default class App extends Component {
//   state = {
//     jobList:[],
//     selectedTags: [],
//     allTags: [],

//   }

//   componentWillMount(){
//     this.setState({jobList:jobsListData})
//   }

//   componentDidMount(){
//     const skills = this.state.jobList.flatMap(o => o.languages).filter(x => x !== undefined);
//     const level = this.state.jobList.flatMap(o => o.role);
//     const role = this.state.jobList.flatMap(o => o.level);
//     const mergedArray =[...role, ...level, ...skills];
//     const allTags =  [...new Set(mergedArray)];
//     this.setState({allTags});
//   }

//   handleTagSelection = (skill) => {
//         let selectedTags = [...this.state.selectedTags];
//         selectedTags.push(Object.values(skill)[0])
//         selectedTags = [...new Set(selectedTags)]

//         let filterTags = this.filteredTags(this.state.allTags, selectedTags );
//         let result = this.filterJobs(filterTags, this.state.jobList);
//         this.setState({selectedTags, jobsList : result })
//     }

//   filteredTags = (allTags, filterTag) =>{
//     return allTags.filter(tag => filterTag.includes(tag));
//   }

//   filterJobs = (filterTags, jobs) => {
//     let result = jobs;

//     filterTags.forEach(tag => {
//       console.log("filter",jobs.filter(job => job.languages.includes(tag)))
//       result = jobs.filter(job => job.languages.includes(tag))
//     })
//     console.log("result", result);
//     return result;
//   }

//   handleClearAllFilter = () => {
//     this.setState({
//       selectedTags : [],
//       jobList:jobsListData
//     });
//   }

//   handleClearFilter = (skill) => {
//     let selectedTags = [...this.state.selectedTags];
//     const index = selectedTags.indexOf(skill);
//     selectedTags.splice(index, 1);
//     this.setState({selectedTags })
//   }

//   // handleTagSelected = () => {
//   //   console.log("Test")
//   //   let filterTags = this.filteredTags(this.state.allTags, this.state.selectedTags);
//   //   this.filterJobs(filterTags, this.state.jobList);
//   // }

//   render(){

//     console.log("jobslist",this.state.jobList)
//     return (
//       <div className="App">
//         <div className="background"></div>
//         <div className="main-container">
//           <FilterList
//             selectedTags = {this.state.selectedTags}
//             onClearTags = {this.handleClearAllFilter}
//             onClearTag = {this.handleClearFilter}
//             />
//           <List
//             jobList = {this.state.jobList}
//             onTagSelection = {this.handleTagSelection}/>
//         </div>

//       </div>
//     )
//   }

// }

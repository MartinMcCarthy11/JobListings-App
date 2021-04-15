import React, { useState, useEffect } from 'react';
import List from './List';
import { FilterList } from './FilterList';
import jobsListData from '../data.json';
import { useTagList } from '../context/ListContext';

const App = () => {
	const [jobList, setJobList] = useState(jobsListData);
	const { tagList, saveFilteredTagList, clearTags } = useTagList();

	const onClearTag = (skill) => {
		let filtered = [...new Set(tagList)].filter((x) => x !== skill);
		saveFilteredTagList(filtered);
	};

	const onClearAllTags = () => {
		clearTags();
	};

	useEffect(() => {
		let filteredTagList = [...new Set(tagList)];
		let result = jobsListData;
		filteredTagList.forEach((tag) => {
			result = jobList.filter(function (v, i) {
				return (
					v['languages'].includes(tag) ||
					v['role'].includes(tag) ||
					v['level'].includes(tag)
				);
			});
		});

		setJobList(result);
	}, [tagList]);

	return (
		<div className='App'>
			<div className='background'></div>
			<div className='main-container'>
				<FilterList
					selectedTags={[...new Set(tagList)]}
					onClearAllTags={onClearAllTags}
					onClearTag={onClearTag}
				/>
				<List jobList={jobList} />
			</div>
		</div>
	);
};

export default App;

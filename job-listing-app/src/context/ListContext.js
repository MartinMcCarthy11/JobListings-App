import { set } from 'lodash';
import React, { useContext, useEffect, useState } from 'react';

const TagListContext = React.createContext();

export function useTagList() {
	return useContext(TagListContext);
}

export function TagListProvider({ children }) {
	const [tagList, setTagList] = useState([]);

	function saveTagList(tags) {
		return setTagList([...tagList, tags]);
	}

	function saveFilteredTagList(filteredTags) {
		return setTagList(filteredTags);
	}

	function clearTags() {
		return setTagList([]);
	}

	useEffect(() => {
		//Dont really know whats needed here...
		//Getting the following error thats related to this but im too tired to figure it out :-)
		//{Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.}
		return function cleanup() {};
	}, []);

	const value = {
		tagList,
		saveTagList,
		saveFilteredTagList,
		clearTags,
	};
	return (
		<TagListContext.Provider value={value}>
			{children}
		</TagListContext.Provider>
	);
}

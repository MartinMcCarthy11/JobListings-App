import React from 'react';
import HomePage from './components/HomePage';
import { TagListProvider } from './context/ListContext';
import './App.scss';

const App = () => {
	return (
		<TagListProvider>
			<HomePage />
		</TagListProvider>
	);
};

export default App;

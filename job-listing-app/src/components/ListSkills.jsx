import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTagList } from '../context/ListContext';

export const ListSkills = ({ jobLevel, jobRole, jobSkills, onTagSelected }) => {
	const { saveTagList } = useTagList();
	let arr = jobSkills !== undefined ? [jobLevel, jobRole, ...jobSkills] : [];

	const saveTags = (x) => {
		return saveTagList(x);
	};

	return arr.map((x) => (
		<li
			key={`${x}1`}
			className='skill'
			onClick={() => {
				saveTags(x);
			}}
		>
			{x}
		</li>
	));
};

// ListSkills.propTypes = {
// 	jobLevel: PropTypes.string,
// 	jobRole: PropTypes.string,
// 	jobSkills: PropTypes.array,
// 	onTagSelection: PropTypes.func.isRequired,
// };

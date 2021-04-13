import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTagList } from '../context/ListContext';

export const ListSkills = ({ jobLevel, jobRole, jobSkills }) => {
	const [tagSelection, setTagSelection] = useState([]);
	const { saveTagList } = useTagList();
	let arr = jobSkills !== undefined ? [jobLevel, jobRole, ...jobSkills] : [];
	return arr.map((x) => (
		<li
			key={`${x}1`}
			className='skill'
			onClick={() => saveTagList(x)}
			tagSelection={tagSelection}
		>
			{x}
		</li>
	));
};

ListSkills.propTypes = {
	jobLevel: PropTypes.string,
	jobRole: PropTypes.string,
	jobSkills: PropTypes.array,
	onTagSelection: PropTypes.func.isRequired,
};

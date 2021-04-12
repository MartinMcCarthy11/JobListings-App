import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import RemoveIcon from '../images/RemoveIcon';

export const FilterList = ({
	selectedTags,
	onClearTag,
	onClearTags,
	onTagSelected,
}) => {
	let classList =
		selectedTags.length >= 1
			? 'filter-list'
			: 'filter-list filter-list--inVisible';
	return (
		<div className={classList}>
			<ul className='skills-list skills-list--filter'>
				{selectedTags.map((x) => (
					<React.Fragment key={uuidv4(0x10)}>
						<li onClick={onTagSelected} className='selected-skill'>
							{x}
						</li>
						<span
							className='selected-skill__remove-icon'
							onClick={() => onClearTag({ x })}
						>
							<RemoveIcon />
						</span>
					</React.Fragment>
				))}
			</ul>
			<ul className='skills-list'>
				<li className='clear-button' onClick={onClearTags}>
					Clear
				</li>
			</ul>
		</div>
	);
};

FilterList.propTypes = {
	selectedTags: PropTypes.array.isRequired,
	onClearTags: PropTypes.func.isRequired,
	onClearTag: PropTypes.func.isRequired,
	// onTagSelected: PropTypes.func.isRequired
};

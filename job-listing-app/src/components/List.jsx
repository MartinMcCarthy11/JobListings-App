import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

function List({ jobList, onTagSelection }) {
	const [ids, setIds] = useState();
	const [activeId, setActiveId] = useState('');

	useEffect(() => {
		const ids = jobList.flatMap((o) => o.id);
		setIds({ ids });
	}, [jobList]);

	return (
		<div>
			<>
				<ul>
					{jobList.map((job) => (
						<ListItem
							key={job.id}
							jobListSkills={job}
							// onTagSelection={onTagSelection}
							onCompanySelection={(id) =>
								id !== activeId
									? setActiveId(id)
									: setActiveId(0)
							}
							active={activeId}
						/>
					))}
				</ul>
			</>
		</div>
	);
}

List.propTypes = {
	jobList: PropTypes.array,
	onTagSelection: PropTypes.func,
};

export default List;

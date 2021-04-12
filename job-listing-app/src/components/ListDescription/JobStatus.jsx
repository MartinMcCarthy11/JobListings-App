import React from 'react';
import PropTypes from 'prop-types';

const JobStatus = ({ jobcompany, jobTagNew, jobTagFeatured }) => {
	const isNew = jobTagNew ? 'New!' : '';
	const newClassList = jobTagNew
		? 'job-detail__item job-detail__item--new'
		: 'job-detail__item ';
	const featuredClassList = jobTagFeatured
		? 'job-detail__item job-detail__item--featured'
		: 'job-detail__item';
	const isFeatured = jobTagFeatured ? 'Featured' : '';
	return (
		<div className='flex-row job-description-row'>
			<span className='job-detail__item'>{jobcompany}</span>
			<span className={newClassList}>{isNew}</span>
			<span className={featuredClassList}>{isFeatured}</span>
		</div>
	);
};

JobStatus.propTypes = {
	jobTagNew: PropTypes.bool,
	jobTagFeatured: PropTypes.bool,
	jobcompany: PropTypes.string,
};

export default JobStatus;

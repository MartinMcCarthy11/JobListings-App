import React from 'react'
import PropTypes from 'prop-types';

export const ListSkills = ({jobLevel, jobRole, jobSkills, onTagSelection}) => {
  let arr = jobSkills !== undefined ? [jobLevel, jobRole, ...jobSkills] : [];
  return  arr.map(x => <li key={`${x}1`} className="skill" onClick={() => onTagSelection({x})}>{x}</li>)
}

ListSkills.propTypes = {
    jobLevel: PropTypes.string,
    jobRole: PropTypes.string,
    jobSkills: PropTypes.array,
    onTagSelection: PropTypes.func.isRequired
}
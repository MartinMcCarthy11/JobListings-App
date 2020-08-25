import React from 'react'
import PropTypes from 'prop-types';

export const ListSkills = ({jobLevel, jobRole, jobSkills, onSkillSelection}) => {
  let arr = jobSkills !== undefined ? [jobLevel, jobRole, ...jobSkills] : [];
  return  arr.map(x => <li key={`${x}1`} className="skill" onClick={() => onSkillSelection({x})}>{x}</li>)
}

ListSkills.propTypes = {
    jobLevel: PropTypes.string,
    jobRole: PropTypes.string,
    jobSkills: PropTypes.array,
    onSkillSelection: PropTypes.func.isRequired
}
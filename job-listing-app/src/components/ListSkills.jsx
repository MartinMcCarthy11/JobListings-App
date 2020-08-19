import React from 'react'

export const ListSkills = ({jobLevel, jobRole, jobSkills, onSkillSelection}) => {
  let arr = jobSkills !== undefined ? [jobLevel, jobRole, ...jobSkills] : [];
  return  arr.map(x => <li key={`${x}1`} className="skill" onClick={() => onSkillSelection({x})}>{x}</li>)
}
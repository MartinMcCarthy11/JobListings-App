import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid';
import RemoveIcon from '../images/RemoveIcon';

export const FilterList = ({selectedSkills, onClearSkill, onClearSkills}) => {
    let classList = selectedSkills.length >= 1 ? 'filter-list' : 'filter-list filter-list--inVisible';
        return (
            <div className={classList}>
                <ul className="skills-list skills-list--filter">
                    {selectedSkills.map(x => <React.Fragment key={uuidv4(0x10)}><li className="selected-skill">{x}</li><span className="selected-skill__remove-icon" onClick={() => onClearSkill({x})} ><RemoveIcon/></span></React.Fragment>)}
                </ul>
                <ul className="skills-list">
                    <li className="clear-button" onClick={onClearSkills}>Clear</li>
                </ul>
            </div>
        )
}

FilterList.propTypes = {
    selectedSkills: PropTypes.array.isRequired,
    onClearSkills: PropTypes.func.isRequired,
    onClearSkill: PropTypes.func.isRequired
}
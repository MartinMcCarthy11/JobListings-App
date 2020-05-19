import React, { Component } from 'react'
import RemoveIcon from '../images/RemoveIcon';

export default class FilterList extends Component {
    render() {
        let classList = this.props.selectedSkills.length >= 1 ? 'filter-list' : 'filter-list filter-list--inVisible';
        return (
            <div className={classList}>
                <ul className="skills-list">
                    {this.props.selectedSkills.map(x => <React.Fragment><li className="selected-skill">{x}</li><span className="selected-skill__remove-icon" onClick={() => this.props.onClearSkill({x})} ><RemoveIcon/></span></React.Fragment>)}
                </ul>
                <ul className="skills-list">
                    <li className="clear-button" onClick={this.props.onClearSkills}>Clear</li>
                </ul>
            </div>
        )
    }
}

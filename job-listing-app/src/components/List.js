import React from 'react'
//import ListImage from './ListImage';
import ListItem from './ListItem';

function List(props) {
    return (
        
        <ul>
            <div>
                <ListItem jobListSkills = {props.jobList}/>
            </div>
        </ul>
    )
}

export default List;
import React from 'react'

function List(props) {
    console.log(props);
    return (
        props.jobList.map(d => <li>{d.company}</li>)
    )
}

export default List;
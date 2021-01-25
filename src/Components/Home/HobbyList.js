import React from 'react';

const HobbyList = (props) => {
    return (
        <ul>
            {props.hobbyList.map((hobby) => (
                <li>{hobby.title}</li>
            ))}
        </ul>
    )
}


export default HobbyList;
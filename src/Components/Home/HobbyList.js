import React from "react";
import "./HobbyList.css";
import PropTypes from 'prop-types';


// HobbyList.propTypes = {
//     hobbyList: PropTypes.array,
//     activeID: PropTypes.number,
//     onHobbyClick: PropTypes.func,
// }

// HobbyList.defaultProps = {
//     hobbyList: [],
//     activeID: null,
//     onHobbyClick: null,
// }

const HobbyList = (props) => {
  const { hobbyList, activeID, onHobbyClick } = props;
  const handleClick = (hobby) => {
    if (onHobbyClick) {onHobbyClick(hobby)};
  };
  return (
    <ul className="hobby-list">
      {hobbyList.map((hobby) => (
        <li
          key={hobby.id}
          onClick={() => handleClick(hobby)}
          className={hobby.id === activeID ? "active" : ""}
        >
          {hobby.title}
        </li>
      ))}
    </ul>
  );
};

HobbyList.propTypes = {
  activeID: PropTypes.any,
  hobbyList: PropTypes.array,
  onHobbyClick: PropTypes.func
}

export default HobbyList;

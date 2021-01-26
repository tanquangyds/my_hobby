import React from "react";
import "./TaskList.css";
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

const TaskList = (props) => {
  const {taskList, isEdit} = props;
  
  return (
    <ul className="task-list">
      {taskList.map(task => {
        return (
          <li key={task.id} >{task.title}</li>
        )
      })}
    </ul>
  );
};



export default TaskList;

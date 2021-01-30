import React from "react";
import "./TaskList.css";
import { useSelector } from "react-redux";
import Task from "./Task";

const TaskList = (props) => {
  const { updateStatusClick, deleteClicked, saveTaskHandle } = props;
  const taskList = useSelector((state) => state.task.list);

  return (
    <ul className="task-list">
      {taskList.map((task, index) => {
        return (
          <Task
            key={task.id}
            task={task}
            index={index}
            updateStatusClick={updateStatusClick}
            deleteClicked={deleteClicked}
            saveTaskHandle={saveTaskHandle}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;

import React, { useState } from "react";
import "./TaskList.css";
import { useSelector } from "react-redux";



const TaskList = (props) => {
  const { updateStatusClick, deleteClicked } = props;
  const taskList = useSelector((state) => state.task.list);
  const [isEdit, setIsEdit] = useState(false);
  const [getId, setGetId] = useState(null);

  return (
    <ul className="task-list">
      {taskList.map((task, index) => {
        return (
          <li key={task.id}>
            {getId === index && isEdit ? (
              <div>
                <input type="text"></input>{" "}
                <span onClick={() => setIsEdit(!isEdit)}>Save</span>
              </div>
            ) : (
              <span onClick={() => {setIsEdit(!isEdit); setGetId(index)} }>{task.title}</span>
            )}

            {task.completed ? (
              <span className="status" onClick={() => updateStatusClick(task, index)}>
                <img
                  alt="done"
                  src="https://img.icons8.com/office/20/000000/checkmark--v1.png"
                />
              </span>
            ) : (
              <span className="status" onClick={() => updateStatusClick(task, index)}>
                <img
                  alt="waiting"
                  src="https://img.icons8.com/pastel-glyph/20/000000/time-machine.png"
                />
              </span>
            )}
            <span  onClick={() => deleteClicked(index)} >
              <img
                alt="delete"
                src="https://img.icons8.com/color/20/000000/delete-sign--v1.png"
              />
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;

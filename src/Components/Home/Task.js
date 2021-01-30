import React, { useState, useRef, useEffect } from "react";

import "./Task.css";

const Task = (props) => {
  const {
    task,
    index,
    updateStatusClick,
    deleteClicked,
    saveTaskHandle,
  } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const inputEdit = useRef(null);

  useEffect(() => {
    isEdit && inputEdit.current.focus();
  }, [isEdit]);

  return (
    <div>
      <li>
        {isEdit ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              saveTaskHandle(newTitle, index);
              setIsEdit(!isEdit);
            }}
          >
            <input
              ref={inputEdit}
              type="text"
              placeholder={task.title}
              onChange={(even) => {
                even.target.value.trim() && setNewTitle(even.target.value);
              }}
            ></input>
            <button type="submit" className="btn-save">
              Save
            </button>
          </form>
        ) : (
          <span
            onClick={() => {
              setIsEdit(!isEdit);
            }}
          >
            {task.title}
          </span>
        )}

        {task.completed ? (
          <span
            className="status"
            onClick={() => updateStatusClick(task, index)}
          >
            <img
              alt="done"
              src="https://img.icons8.com/office/20/000000/checkmark--v1.png"
            />
          </span>
        ) : (
          <span
            className="status"
            onClick={() => updateStatusClick(task, index)}
          >
            <img
              alt="waiting"
              src="https://img.icons8.com/pastel-glyph/20/000000/time-machine.png"
            />
          </span>
        )}
        <span onClick={() => deleteClicked(index)}>
          <img
            alt="delete"
            src="https://img.icons8.com/color/20/000000/delete-sign--v1.png"
          />
        </span>
      </li>
    </div>
  );
};

export default Task;

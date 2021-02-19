import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { AddTodo } from "../actions/Tasks";
import { updateStatus } from "../actions/Tasks";
import { deleteTask } from "../actions/Tasks";
import { updateTile } from "../actions/Tasks";
import TaskList from "../Components/Home/TaskList";
import TaskInputForm from "../Components/Home/TaskInputForm";
import "./Homepage.css";

const Homepage = (props) => {
  const inputEl = useRef(null);
  const dispatch = useDispatch();
  const [titleTask, setTitleTask] = useState("");

  const changedInPut = (value) => {
    setTitleTask(value);
  };
  const submitHandler = (formValues) => {
    
    const action = AddTodo(formValues);
    dispatch(action);
    inputEl.current.value = "";
    setTitleTask("");
  };
  const updateStatusHandler = (task, index) => {
    const status = {
      status: task.completed,
      index: index,
    };
    dispatch(updateStatus(status));
  };

  const deleteTaskHandler = (index) => {
    dispatch(deleteTask(index));
  };
  const updateTaskHandler = (newTitle, index) => {
    const updateTitle = {
      title: newTitle,
      index: index,
    };
    dispatch(updateTile(updateTitle));
  };

  return (
    <div className="homepage">
      <h1 className="title">Todo List Application</h1>
      <TaskInputForm
        onSubmit={submitHandler}
        titleTask={titleTask}
        changedInPut={changedInPut}
        inputEl={inputEl}
      />
      <TaskList
        saveTaskHandle={updateTaskHandler}
        updateStatusClick={updateStatusHandler}
        deleteClicked={deleteTaskHandler}
      />
    </div>
  );
};

export default Homepage;

import React from "react";
import { useSelector } from "react-redux";
import TaskList from "../Components/Home/TaskList";
import { useDispatch } from "react-redux";
import { addNewTask } from "../actions/Tasks";
import { setNewTitle } from "../actions/Tasks";


const Homepage = (props) => {
  const taskList = useSelector((state) => state.task.list);
  const isEdit = useSelector((state) => state.task.editTask);
  
  let title= '' 
  const getValue = (value) => {
    return title = value
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const newTask = {
      id: Math.random().toString(),
      title: title
    }
    console.log(newTask)
    const action = addNewTask(newTask);
    console.log(action)
    dispatch(action);
  }
  return (
    <div className="homepage">
      <h1>Todo-List</h1>
      <form onSubmit={submitHandler}>
        <input type='text' onChange={(event) => getValue(event.target.value)} />
        <button type='submit'>Add Task</button>
      </form>
      <TaskList 
      taskList={taskList}
      isEdit={isEdit} />
    </div>
  );
};

export default Homepage;

import React from "react";
import './TaskInputForm.css'


const TaskInputForm = (props) => {
  const { submitForm, changedInPut, titleTask, inputEl} = props;

  return (
      <form className="form" onSubmit={submitForm}>
        <input
          ref={inputEl}
          type="text"
          onChange={(event) => changedInPut(event.target.value)}
          value={titleTask}
          placeholder="Input your task"
        />
        <button type="submit">Add Task</button>
      </form>
  );
};


export default TaskInputForm;

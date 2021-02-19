import React, { useState } from "react";
import "./TaskInputForm.css";

const TaskInputForm = (props) => {
  const [valueTitle, setValueTitle] = useState();
  const [valueAuthor, setValueAuthor] = useState();
  const { onSubmit, changedInPut, titleTask, inputEl } = props;
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!onSubmit) return;
    const formValues = {
      id: Math.random().toString(),
      title: valueTitle,
      author: valueAuthor,
      status: 'new',
    };
    onSubmit(formValues)
  }
  return (
    <form className="form" onSubmit={handleSubmitForm}>
      <div>
        <label>Title</label>
        <input
          name="title"
          ref={inputEl}
          type="text"
          onChange={(event) => setValueTitle(event.target.value)}
          value={valueTitle}
          placeholder="Input Title task"
        />
      </div>
      <div>
        <label>Author</label>
        <input
          name="author"
          ref={inputEl}
          type="text"
          onChange={(event) => setValueAuthor(event.target.value)}
          value={valueAuthor}
          placeholder="Input author"
        />
      </div>
      <div>
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
};

export default TaskInputForm;

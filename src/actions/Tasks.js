import types from './actionType'

export const GetTodos = data => {
  return {
    type: types.GET_TODOS,
    payload: data
  };
};

export const AddTodo = data => {
  return {
    type: types.ADD_TODO,
    payload: data
  };
};

export const updateStatus = (status) => {
  return {
    type: "update_status",
    payload: status,
  };
};

export const deleteTask = (index) => {
  return {
    type: "delete_task",
    payload: index,
  };
};

export const updateTile = (newTilOj) => {
  console.log(newTilOj);
  return {
    type: "update_title",
    payload: newTilOj,
  };
};

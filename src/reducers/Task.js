const initialState = {
  list: [],
  // editTaskId: null
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add_task": {
      const newTaskList = [...state.list];
      newTaskList.push(action.payload);
      return {
        ...state,
        list: newTaskList,
      };
    }

    case "update_status": {
      const newTaskList = [...state.list];
      newTaskList[action.payload.index].completed = !action.payload.status;
      return {
        ...state,
        list: newTaskList,
      };
    }

    case "delete_task": {
      return {
        ...state,
        list: state.list.filter((el, id) => id !== action.payload),
      };
    }

    case "update_title": {
      const newTask = [...state.list];
      newTask[action.payload.index].title = action.payload.title;
      return {
        ...state,
        list: newTask,
      };
    }

    default: {
      return state;
    }
  }
};

export default taskReducer;

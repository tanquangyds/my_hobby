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
      const getIndex = action.payload.index;
      const newStatus = !action.payload.status;
      const newTaskList = [...state.list];
      newTaskList[getIndex].completed = newStatus;
      return {
        ...state,
        list: newTaskList,
      };
    }

    case "delete_task": {
      return {
        ...state,
        list: state.list.filter((el,id) => id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
};

export default taskReducer;

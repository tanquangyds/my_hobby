export const addNewTask = (task) => {
    return {
        type: 'add_task',
        payload: task,
    }
}

export const setNewTitle = (task) => {
    return {
        type: 'edit_task',
        payload: task,
    }
}
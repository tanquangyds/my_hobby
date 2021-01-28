export const addNewTask = (task) => {
    return {
        type: 'add_task',
        payload: task,
    }
}

export const updateStatus = (status) => {
    return {
        type: 'update_status',
        payload: status,
    }
}

export const deleteTask = (index) => {
    return {
        type: 'delete_task',
        payload: index,
    }
}




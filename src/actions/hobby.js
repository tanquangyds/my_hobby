export const addNewHobby = (hobby) => {
    return {
        type: 'add_hobby',
        payload: hobby,
    }
}

export const setActiveHobby = (hobby) => {
    return {
        type: 'set_active_hobby',
        payload: hobby,
    }
}
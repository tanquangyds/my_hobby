
const initialState = {
    list: [{
        title: 'Hoc React',
        id: 1,
    }],
    editTask: false
}


const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add_task' : {
            
            return state
        }

        case 'edit_task' : {
            return state
        }

        default : {
            return state;
        }
    }
}

export default taskReducer;

const initialState = {
    list: [],
    activeId: 1
}


const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add_hobby' : {
            const newList = [...state.list];
            newList.push(action.payload);
            
            return {
                ...state,
                list: newList,
            }
        }

        case 'set_active_hobby' : {
            const newActiveId = action.payload.id;
            return {
                ...state,
                activeId: newActiveId,
            }
        }

        default : {
            return state;
        }
    }
}

export default hobbyReducer;
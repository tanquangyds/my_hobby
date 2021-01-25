
const initialState = {
    list: [],
    activeId: null
}


const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add_hobby' : {
            console.log(state)
            console.log(state.list)
            const newList = [...state.list];
            console.log(newList);
            newList.push(action.payload);
            
            return {
                ...state,
                list: newList,
            }
        }

        case 'set_active_hobby' : {
            break;
        }

        default : {
            return state;
        }
    }
}

export default hobbyReducer;
const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'add_hobby' : {
            return state;
        }

        case 'set_active_hobby' : {
            return state;
        }

        default : {
            return state;
        }
    }
}

export default userReducer;
import hobbyReducer from './Hobby';
import { combineReducers } from 'redux';
import userReducers from './UserReducer';

const rootReducer = combineReducers({
    hobby: hobbyReducer,
    user: userReducers,
});

export default rootReducer;
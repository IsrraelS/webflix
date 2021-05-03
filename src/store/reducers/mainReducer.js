import { combineReducers } from 'redux'
import loginReducer from './loginReducer';
import movieReducer from './movieReducer';
import userReducer from './userReducer';

const mainReducer = combineReducers({
    token: loginReducer,
    user: userReducer,
    movie: movieReducer
}) 

export default mainReducer;
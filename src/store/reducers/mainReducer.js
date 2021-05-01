import { combineReducers } from 'redux'
import loginReducer from './loginReducer';
import userReducer from './userReducer';

const mainReducer = combineReducers({
    token: loginReducer,
    user: userReducer
}) 

export default mainReducer;
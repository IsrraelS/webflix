import { createStore, applyMiddleware } from 'redux'
import mainReducer from './reducers/mainReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

let store = createStore(mainReducer, {}, applyMiddleware(thunk));


export default store;
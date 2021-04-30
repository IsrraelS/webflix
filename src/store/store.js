import { createStore, applyMiddleware, compose } from 'redux'
import mainReducer from './reducers/mainReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(
	thunk
)(createStore);

let store = createStoreWithMiddleware(
    mainReducer,
    {}, 
    devToolsEnhancer({ trace: true}) || compose
)

/**
 * 
 * 
    let store = createStore(
        mainReducer,
        {}, 
        compose(applyMiddleware(devToolsEnhancer({ trace: true}), applyMiddleware(thunk))
    )
)
 */

export default store;
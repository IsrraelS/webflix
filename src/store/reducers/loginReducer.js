const loginReducer = (token = "", action) => {
    switch (action.type) {
        case 'GET_TOKEN':    
            return action.token 
        case 'LOGIN_ERROR':    
            return token 
        default:
            return token
    }
}

export default loginReducer
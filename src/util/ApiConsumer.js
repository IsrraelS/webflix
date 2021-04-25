const urlLocal = `http://127.0.0.1:5000`;

//Object used to connect to local API and to fetch information
const ApiConsumer = {

    //sends email and password to API and saves token in a cookie
    login : async (email, password) => {
        try {
            let response = await fetch('http://127.0.0.1:5000/users', 
            { method: 'POST', body: { email: email, password: password }});
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }        
    }
}

export default ApiConsumer
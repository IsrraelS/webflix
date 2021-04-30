const urlLocal = `http://127.0.0.1:5000`;

//Object used to connect to local API and to fetch information
const ApiConsumer = {
    
    login : async (email, password) => {
        try {
            let response = await fetch(`${urlLocal}/login`, 
            { method: 'POST', 
                body: JSON.stringify({ 
                    email: email, 
                    password: password }),
                headers:{'Content-Type': 'application/json'}
            });
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    register : async (name, lastname, email, age, password) => {
        try {
            let response = await fetch(`${urlLocal}/singup`, 
            { method: 'POST', 
            body: JSON.stringify({ 
                name: name,
                lastname: lastname,
                email: email, 
                age: age,
                admin: false,
                password: password }),
                headers:{'Content-Type': 'application/json'}
            });
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    getUser : async (token) => {
        try {
            let response = await fetch(`${urlLocal}/users`, 
            { method: 'GET',             
                headers:{
                    'token': token
                }
            });
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    getMoviesByGenre : async (token, genre) => {
        try {
            let response = await fetch(`${urlLocal}/movies/genre`, 
            { method: 'GET',             
                headers:{
                    'token': token,
                    'genre': genre
                }
            });
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    },
}

export default ApiConsumer
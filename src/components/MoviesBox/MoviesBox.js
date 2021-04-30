import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ApiConsumer from "../../util/ApiConsumer";

const MoviesBox = (pros) => {
    //tengo que hacer un fetch de peliculas por genero y mapear el resultado en el return
    //el genero tiene que ser elegido en un componente externo que a travez de un middleware 
    //modifique un campo de movies por genero que sea un state del store y este componente 
    //solo tenga que subscribirse a el
    let [movies, setMovies] = useState([]);
    const token = useSelector(state => state.token.jwt);
    console.log(token);
    const genre = "Horror"
    useEffect(async () => {
        let result= await ApiConsumer.getMoviesByGenre(token,genre);
        console.log(result);
    }, [])
        
    return(       
        <>
            {movies.map((movie, index ) => {
                return (
                    <div>
                    </div>  
                )}
            )}  
        </>
    )
}

export default MoviesBox;
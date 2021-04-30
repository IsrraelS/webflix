import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ApiConsumer from "../../util/ApiConsumer";
import './MoviesBox.scss';

const MoviesBox = (props) => {
    let [movies, setMovies] = useState([]);
    const token = useSelector(state => state.token.jwt);
    console.log(token);
    const genre = props.genre;
    const actor = props.actor;
    const title = props.title;
    let apiFunction;
    let parametro;
    if(genre){
        apiFunction = ApiConsumer.getMoviesByGenre;
        parametro = genre;
    }    
    if(actor){
        apiFunction = ApiConsumer.getMoviesByActor;
        parametro = actor;
    } 
    if(title){
        apiFunction = ApiConsumer.getMoviesByTitle;
        parametro = title;
    }
    useEffect(async () => {
        let result= await apiFunction(token, parametro);
        setMovies(result);
        console.log(result);
    }, [])
    
        
    return(       
        <>
            {movies.map((movie, index ) => {
                return (
                    <div key={index} className="movie-box">
                        <div>{movie.title}</div>
                        <img className="image" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                    </div>  
                )}
            )}  
        </>
    )
}

export default MoviesBox;
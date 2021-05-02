import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ApiConsumer from "../../util/ApiConsumer";
import './OverFlowRow.scss'
import 'bootstrap/dist/css/bootstrap.css'
import BoxMovie from "../boxMovie/BoxMovie";

function OverFlowRow(props){
    let [movies, setMovies] = useState([]);
    const token = useSelector(state => state.token.jwt);
    console.log(token);
    const genre = props.genre;
    const actor = props.actor;
    const title = props.title;
    const director = props.director;
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
    if(director){
        apiFunction = ApiConsumer.getMoviesByDirector;
        parametro = director;
    }
    useEffect(async () => {
        let result= await apiFunction(token, parametro);
        setMovies(result);
        console.log(result);
    }, [])

    return(
        <div className="overflow-auto cntMF">
            {movies.map((movie, index ) => {
                return (
                    <BoxMovie 
                    key={index} 
                    ruta={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
                    tagline={movie.tagline} />
                )}
            )}  
            
    </div>

    )
}

export default OverFlowRow;
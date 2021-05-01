import React, { useEffect, useState } from "react";
import ApiConsumer from "../../util/ApiConsumer";
import './MovieDetail.scss'

const MovieDetail = (props) => {
    const [movie, setMovie] = useState({});
    const [cast, setCast] = useState([]);
    const [genres, setGenres] = useState([]);
    const id = props.id;
    useEffect(() => {
        const getData= async () =>{
            let result= await ApiConsumer.getMoviesById(id);
            setMovie(result);
            setCast(result.cast);         
            setGenres(result.genres);
        }
        getData();            
    }, [id])

    return (
        <>
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="fondo"/>
        <div>{movie.overview}</div>
        <div>{movie.tagline}</div>
        {cast.map((actor, index) => {
            return(
            <span key={index}>{actor}</span>
            )
        })}
        {genres.map((genre, index) => {
            return(
            <span key={index}>{genre}</span>
            )
        })}
        <div>
            <a href={`https://www.youtube.com/watch?v=${movie.video}`} target="_blank" rel="noreferrer">trailer</a>            
        </div>
        <div>{movie.price}</div>
        <div>{movie.director}</div>
        </>
    )
};

export default MovieDetail;
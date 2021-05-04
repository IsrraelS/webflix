import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { movieAction } from '../../store/actions/movieActions';
import ApiConsumer from '../../util/ApiConsumer';
import BoxMovie from '../boxMovie/BoxMovie';
import './Search.scss'


const Search = () => {
    const criteria = useSelector(state => state.criteria);
    let [texto, setTexto] = useState("")
    let [movies, setMovies] = useState([]);

    const buscarMovies = (e) => {
        e.preventDefault();
        let busqueda;
        console.log(criteria)
        switch(criteria) {
            case "title":
                busqueda = ApiConsumer.getMoviesByTitle;
                break;
            case "genre":
                busqueda = ApiConsumer.getMoviesByGenre;
                break;
            case "actor":
                busqueda = ApiConsumer.getMoviesByActor;
                break;
            case "director":
                busqueda = ApiConsumer.getMoviesByDirector;
                break;
            default:
                break;
        }
        getMovies(busqueda);
    }

    const getMovies = async (buscar) => {
        console.log("get movies", texto)
        let response = await buscar(texto);
        console.log(response);
        setMovies(response);
    }
    const history = useHistory();
    const dispatch = useDispatch();
    const detalles = (movie) => {
        dispatch(movieAction(movie));
        history.push('/movieDetail');
    }
    
    return (
        <>
        <br/><br/><br/>
            <div>
                {criteria}
            </div>
            <input type="text" onChange={(e) => setTexto(e.target.value)} ></input>
            <button onClick={(e) => buscarMovies(e)}>Search</button>
            <div className="contenedor">
            {movies.map((movie, index ) => {
                return (
                    <BoxMovie 
                    key={index} 
                    movies={movie} 
                    funcion={detalles} 
                    ruta={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
                    tagline={movie.tagline} />
                )}
            )}  
            </div>
        </>
    )
}

export default Search;
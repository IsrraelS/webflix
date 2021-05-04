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
        <div className="cntSearch">
            <h3 className="txtS">Search</h3>
            <div className="cntMainS">
                <div className="txtUse">
                    <p className="txtP">From here, you can search for all the movies you want to see, by name, title, genre, actors and directors.</p> 
                </div>
                <div className="boxSearch">
                    <div className="boxInfo">
                        {criteria}
                    </div>
                    <div className="boxIB">
                        <input className="impS" type="text" onChange={(e) => setTexto(e.target.value)} ></input>
                        <button onClick={(e) => buscarMovies(e)}>Search</button>
                    </div>
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
                </div>
            </div>
        </div>
    )
}

export default Search;
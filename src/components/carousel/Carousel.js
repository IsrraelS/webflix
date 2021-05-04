import './Carousel.scss';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import ApiConsumer from "../../util/ApiConsumer";
import ImageHolder from '../ImageHolder/ImageHolder.js';
import { movieAction } from '../../store/actions/movieActions';



function Carousel(){

    let [movies, setMovies] = useState([]);
    useEffect(() => {
        const getMovies = async() => {
            let result= await ApiConsumer.getMovies();
            setMovies(result);
        }      
        getMovies();  
    }, [])
    const dispatch = useDispatch();
    const history = useHistory();
    const detalles = (movie) => {
        dispatch(movieAction(movie));
        history.push('/movieDetail');
    }

    return(
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                {movies.map((movie, index) => {
                    let active;
                    (index===0? active=true : active=false)
                    return(
                        <ImageHolder 
                        activo={active}
                        key={index} 
                        peli={movie} 
                        funcion={detalles} 
                        ruta = {`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>
                    )
                })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel;
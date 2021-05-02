import './Carousel.scss';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ApiConsumer from "../../util/ApiConsumer";
import ImageHolder from '../ImageHolder/ImageHolder.js';
import LordOfRings1 from "./img/LordOfRings1.jpeg";


function Carousel(){

    let [movies, setMovies] = useState([]);
    useEffect(() => {
        const getMovies = async() => {
            let result= await ApiConsumer.getMovies();
            setMovies(result);
        }      
        getMovies();  
    }, [])
    const detalles = (id) => {
        //puedo guardar el id en store y al dirigir en detalles de pelicula recuperar el id del store
        // hay que redirigir a detalles de pelicula
        console.log("prueba", id)
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
                        id={movie._id} 
                        funcion={detalles} 
                        ruta = {`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>
                    )
                })}

                {/*                         
                <div className="carousel-item active">
                    <img src={ LordOfRings1 } className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={ LordOfRings2 } className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={ LordOfRings3 } className="d-block w-100" alt="..."/>
                </div> */}
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
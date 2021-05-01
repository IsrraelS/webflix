import React from "react";
import './Home.scss'
import 'bootstrap/dist/css/bootstrap.css'
import LordOfRings1 from "../home/img/LordOfRings1.jpeg"
import LordOfRings2 from "../home/img/LordOfRings2.jpeg"
import LordOfRings3 from "../home/img/LordOfRings3.jpeg"
import MoviesBox from '../../components/MoviesBox/MoviesBox.js';
import MovieDetail from '../../components/MovieDetail/MovieDetail.js';

export function Home(){

    return(
        <div className="main"> 
            <div className="cntMain">
                <div className="boxMain">
                    <div className ="centralMain">
                        <div className="carouselHome">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src={ LordOfRings1 } className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src={ LordOfRings2 } className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src={ LordOfRings3 } className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                            </div>
                        </div>
                        <div className="mainFooter">Aqui va una fila de estrenos</div>
                    </div>
                </div>  
            </div>
        </div>
    )
}
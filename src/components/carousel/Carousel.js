import React from "react";
import './Carousel.scss'
import 'bootstrap/dist/css/bootstrap.css'
import LordOfRings1 from "./img/LordOfRings1.jpeg"
import LordOfRings2 from "./img/LordOfRings2.jpeg"
import LordOfRings3 from "./img/LordOfRings3.jpeg"


function Carousel(){

    return(

        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
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
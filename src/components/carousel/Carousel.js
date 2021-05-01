import React from "react";
import './Carousel.scss'
import 'bootstrap/dist/css/bootstrap.css'
import LordOfRings1 from "./img/LordOfRings1.jpeg"
import LordOfRings2 from "./img/LordOfRings2.jpeg"
import LordOfRings3 from "./img/LordOfRings3.jpeg"


function Carousel(){

    return(

        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={ LordOfRings1 } className="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={ LordOfRings2 } className="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={ LordOfRings3 } className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    )

}
export default Carousel;
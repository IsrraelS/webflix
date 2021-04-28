import React from "react";
import './Home.scss'
import 'bootstrap/dist/css/bootstrap.css'
import LordOfRings1 from "../home/img/LordOfRings1.jpeg"
import LordOfRings2 from "../home/img/LordOfRings2.jpeg"
import LordOfRings3 from "../home/img/LordOfRings3.jpeg"

export function Home(){

    return(
        <div className="main"> 
            <div className="cntMain">
                <div className="boxMain">
                    <div className ="centralMain">
                        <div className="carouselHome">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
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
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
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
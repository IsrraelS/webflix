import React from "react";
import './Home.scss'
import 'bootstrap/dist/css/bootstrap.css'
import LordOfRings1 from "../home/img/LordOfRings1.jpeg"
import LordOfRings2 from "../home/img/LordOfRings2.jpeg"
import LordOfRings3 from "../home/img/LordOfRings3.jpeg"
import theGodfather from "../home/img/theGodfather.jpeg"
import theGodfather2 from "../home/img/theGodfather2.jpeg"


export function Home(){

    return(
        <div className="main"> 
            <div className="cntMain">
                <div className="boxMain">
                    <div className ="centralMain">
                        <div className="carouselHome">
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
                        </div>
                        <div className="mainFooter">
                            <div className="overflow-auto cntMF">
                                <div className="boxMF">
                                    <div className="cntPoster">
                                    <img src={ theGodfather } className="imgMF"></img>
                                    </div>
                                    <div className="cntTxt">

                                    </div>
                                </div>
                                <div className="boxMF">
                                    <div className="cntPoster">
                                        <img src={ theGodfather2 } className="imgMF"></img>
                                    </div>
                                    <div className="cntTxt">

                                    </div>
                                </div>
                                <div className="boxMF">
                                    <div className="cntPoster">
                                        <img src={ theGodfather } className="imgMF"></img>
                                    </div>
                                    <div className="cntTxt">

                                    </div>
                                </div>
                                <div className="boxMF">
                                    <div className="cntPoster">
                                        <img src={ theGodfather2 } className="imgMF"></img>
                                    </div>
                                    <div className="cntTxt">
                                        
                                    </div>
                                </div>
                                <div className="boxMF">
                                    <div className="cntPoster">
                                        <img src={ theGodfather } className="imgMF"></img>
                                    </div>
                                    <div className="cntTxt">

                                    </div>
                                </div>
                                <div className="boxMF">
                                    <div className="cntPoster">
                                        <img src={ theGodfather2 } className="imgMF"></img>
                                    </div>
                                    <div className="cntTxt">

                                    </div>
                                </div>
                                <div className="boxMF">
                                    <div className="cntPoster">
                                        <img src={ theGodfather } className="imgMF"></img>
                                    </div>
                                    <div className="cntTxt">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}
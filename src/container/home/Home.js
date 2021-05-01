import React from "react";
import { useState } from "react";
import './Home.scss';
import RBCarousel from 'react-bootstrap-carousel';
import 'bootstrap/dist/css/bootstrap.css';
import iconWTF3 from '../../iconWTF3.png'
import iconWTF7 from '../../iconWTF7.png'


export function Home(){

    const [nowPlaying, setNowPlaying] = useState([]);

    const movies = nowPlaying.slice(0,5).map((img, index) => {

        return(
            <div key={index}>
                <div className="carousel-center">
                    <img src={iconWTF3}/>
                    <img src={iconWTF7}/>
                </div>

            </div>
        )
    });

    return(
        <div className="main"> 
            <div className="cntMain">
                <div className="boxMain">
                    <div className ="centralMain">
                        <div className="central">
                            <RBCarousel
                                autoplay={true}
                                pauseOnVisibility={true}
                                slidesshowSpeed={5000}
                                version={4}
                                indicators={false}
                            >
                                {movies}
                            </RBCarousel>
                        </div>
                        <div className="mainFooter">Aqui va una fila de estrenos</div>
                    </div>
                </div>  
            </div>
        </div>
    )
}
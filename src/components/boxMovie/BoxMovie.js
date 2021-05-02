import React from "react";
import './BoxMovie.scss'
import theGodfather from './img/theGodfather.jpeg'

function BoxMovie(props){

    return(
        <div className="boxMF">
            <div className="cntPoster">
                <img src={ props.ruta } className="imgMF" alt=""></img>
            </div>
        </div>
    )
}

export default BoxMovie;
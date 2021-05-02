import React from "react";
import './BoxMovie.scss';

function BoxMovie(props){

    return(
        <div className="boxMF">
            <div className="cntPoster" onClick={() =>props.funcion(props.movie)}>
                <img src={ props.ruta } className="imgMF" alt=""></img>
            </div>
        </div>
    )
}

export default BoxMovie;
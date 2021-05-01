import React from "react";
import './BoxMovie.scss'
import theGodfather from './img/theGodfather.jpeg'

function BoxMovie(){

    return(
        <div className="boxMF">
            <div className="cntPoster">
                <img src={ theGodfather } className="imgMF"></img>
            </div>
            <div className="cntTxt">

            </div>
        </div>
    )
}

export default BoxMovie;
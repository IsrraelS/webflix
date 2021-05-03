import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import './MovieDetail.scss'
import { useHistory } from "react-router";

const MovieDetail = () => {
   
    /*const movie = {_id:"6086d0d20ff6d715e45ff5bf",
         cast:["yo", "tu"],
         genres:["horror","comedia"],
         backdrop_path:"/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
         title:"Mortal Kombat",
         overview:"Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
         poster_path:"/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg",
         tagline:"Get over here.",
         price:0,
         video:"jBa_aHwCbC4",
         director:"Simon McQuoid"}*/

    const history = useHistory();
    const movie = useSelector(state => state.movie);
    const rent = () => {
        console.log("funcion rentar")
    }

    return (
        <div className="cntMovieDetail">            
            <h1>{movie.title}</h1>
            <div className="boxMD">
                <div className="headerMD">
                    <div className="cntImgMD" >
                        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="fondo" className="imgMD"/>
                    </div>
                </div>
                <div className="mainMD">
                  <button onClick={()=>rent(movie)}>Rent</button>
                    <div className="boxTxtM">  
                        <p className="sinopsis">Sinopsis</p>  
                        <div>{movie.overview}</div>
                        <div>{movie.tagline}</div>
                        <p className="ttlTxt">Actors:</p>
                        {movie.cast.map((actor, index) => {
                            return(
                                <div key={index} className="txtActors">
                                    <span key={index}>{actor}</span>
                                </div>
                            )
                        })}
                        <p className="ttlTxt">Genres:</p>
                        {movie.genres.map((genre, index) => {
                            return(
                                <div key={index} className="txtGeneres">
                                    <span key={index}>{genre}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="footerMD">    
                    <div className="cntTrailer">
                        <a href={`https://www.youtube.com/watch?v=${movie.video}`} target="_blank" rel="noreferrer">trailer</a>            
                    </div>
                    <div className="cntPrice">
                        <div>Price:{movie.price}</div>
                    </div>
                    <div className ="cntDirector">
                        <div>Director:{movie.director}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MovieDetail;
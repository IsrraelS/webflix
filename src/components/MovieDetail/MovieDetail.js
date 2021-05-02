import React, { useEffect, useState } from "react";
import ApiConsumer from "../../util/ApiConsumer";
import './MovieDetail.scss'

const MovieDetail = (props) => {
   
//    const movie = {_id:"6086d0d20ff6d715e45ff5bf",
//         cast:["yo", "tu"],
//         genres:["horror","comedia"],
//         backdrop_path:"/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
//         title:"Mortal Kombat",
//         overview:"Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
//         poster_path:"/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg",
//         tagline:"Get over here.",
//         price:0,
//         video:"jBa_aHwCbC4",
//         director:"Simon McQuoid"}
    const [movie, setMovie] = useState({});
    const [cast, setCast] = useState([]);
    const [genres, setGenres] = useState([]);
    const id = props.id;
    useEffect(() => {
        const getData= async () =>{
            let result= await ApiConsumer.getMoviesById(id);
            setMovie(result);
            setCast(result.cast);         
            setGenres(result.genres);
        }
        getData();            
    }, [id])

    return (
        <div className="cntMovieDetail">
            <div className="cntImgMD">
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="fondo" className="imgMD"/>
            </div>
        </div>
    )
};

export default MovieDetail;
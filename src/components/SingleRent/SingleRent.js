import React from "react";
import './SingleRent.scss';
import BoxMovie from '../boxMovie/BoxMovie.js';

const SingleRent = (props) => {

    return( 
        <div className="cntSingleR">    
            <div className="boxSR">
                <div>{props.user}</div>
                <div className="movie_title" onClick={() =>props.funcion(props.movie)} >{props.title}</div>
                <div className="movie_details">
                    <div>Rent date: {props.startDate.substring(0,10)}</div>
                    <div>Expires :{props.endDate.substring(0,10)}</div>
                    <div>Price :{props.movie.price} €</div>
                </div>
            </div>

            <div className="movie_image">
                <BoxMovie 
                key={props.key} 
                movies={props.movie} 
                funcion={props.funcion} 
                ruta={`https://image.tmdb.org/t/p/original/${props.ruta}`} 
                tagline={props.movie.tagline} />
            </div>
        </div>           
    )
}

export default SingleRent;
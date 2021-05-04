import React from 'react'

const ImageHolder = (props) => {
    return(
        <>
        {props.activo && 
            <div className="carousel-item active"  onClick={() =>props.funcion(props.peli)}>
                <img src={props.ruta} className="d-block w-100" alt="..."/>
            </div>
        }
        <div className="carousel-item"  onClick={() =>props.funcion(props.peli)}>
            <img src={props.ruta} className="d-block w-100" alt="..."/>
        </div>
        </>
    )
}

export default ImageHolder;
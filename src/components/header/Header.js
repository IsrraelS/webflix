import React from "react";
import { Link } from "react-router-dom";
import './Header.scss'
import iconWTFRR from "../../iconWTFRR.png"
import { useDispatch } from "react-redux";
import { searchAction } from "../../store/actions/searchActions";


export function Header(){
    const dispatch = useDispatch();
    const setSeaarchCriteria = (criterio) => {
        dispatch(searchAction(criterio));
    };

    return(
        <div className="header">
            <div className="cntHeader">
                <div className="boxHeader">
                    <div className="cntNavbar">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <Link className="navbar-brand" to="./">
                                    <div className="boxIcon">
                                        <img className="iconWTF" src={ iconWTFRR } alt=""></img>
                                    </div>
                                </Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/register">Register</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/login">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/moviesRented">Movies Rented</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Search
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <li><Link className="dropdown-item" to="/search" onClick={() => setSeaarchCriteria("title")}>Title</Link></li>
                                                <li><Link className="dropdown-item" to="/search" onClick={() => setSeaarchCriteria("genre")}>Genres</Link></li>
                                                <li><Link className="dropdown-item" to="/search" onClick={() => setSeaarchCriteria("actor")}>Actors</Link></li>
                                                <li><Link className="dropdown-item" to="/search" onClick={() => setSeaarchCriteria("director")}>Director</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>    
    )
}


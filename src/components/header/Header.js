import React from "react";
import { Link } from "react-router-dom";
import './Header.scss'
import iconWTFRR from "../../iconWTFRR.png"


export function Header(){

    return(
        <div className="header">
            <div className="cntHeader">
                <div className="boxHeader">
                    <div className="cntNavbar">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <div class="container-fluid">
                                <Link class="navbar-brand" to="./">
                                    <div className="boxIcon">
                                        <img className="iconWTF" src={ iconWTFRR }></img>
                                    </div>
                                </Link>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="#">Register</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="#">Login</Link>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Search
                                            </Link>
                                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <li><Link class="dropdown-item" to="#">Title</Link></li>
                                                <li><Link class="dropdown-item" to="#">Generes</Link></li>
                                                <li><Link class="dropdown-item" to="#">Actors</Link></li>
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

/*
Login

correo
password

Boton de entrar

boton No estas registrado

Registrar

nombre
apellido
correo
edad
password

boton Registrar

segunda imagen con hideen cion sinopsis


*/
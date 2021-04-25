import React from "react";
import './Header.scss'

export function Header(){

    return(
        <div className="header">
            <div className="cntHeader">
                <div className="boxHeader">
                    <div className="cntLogo">
                        <p>Header</p>
                    </div>
                    <div className="cntNavbar">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="#">Navbar</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    <a class="nav-link" href="#">Features</a>
                                    <a class="nav-link" href="#">Pricing</a>
                                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                </div>
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
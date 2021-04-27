import React from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'

export function Login(){

    return(
        <div className="fatherLogin">
            <div className="cntLogin">
                <div className= "headerLgn">
                    <p>Register</p>
                </div>
                <div className="mainLgn">
                    <div className="cntDates">
                        <label className="emailLgn">E-mail:</label>
                        <input className="iptEmL" type="email" placeholder="E-mail" onInput={(e) => function(){}}></input>
                    </div>
                    <div className="cntDates">
                        <label className="passwordLgn">Password:</label>
                        <input className="iptPwL" type="password" placeholder="Password" onInput={(e) => function(){}}></input>
                    </div>
                </div>
                <div className="footerLgn">
                    <div className="btnIn">
                        <button>Sing In</button>
                    </div>
                    <div className="txtRgtr">
                        <p>No estas aun registrado? Pulsa <Link className="redirecRgtr">Aqui</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
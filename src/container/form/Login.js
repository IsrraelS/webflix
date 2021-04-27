import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import ApiConsumer from "../../util/ApiConsumer";
import { useState } from 'react';
import { useHistory } from "react-router";
import Cookies from 'js-cookie';

export function Login(){        

    const history = useHistory();
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        let respuesta = await ApiConsumer.login(email, password);
        if(respuesta.error){
            console.log(respuesta);
            return;
        }
        Cookies.set('token', respuesta.token);
        const token = Cookies.get('token'); 
        history.push('/');
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="fatherLogin">
                <div className="cntLogin">
                    <div className= "headerLgn">
                        <p>Register</p>
                    </div>
                    <div className="mainLgn">
                        <div className="cntDates">
                            <label className="emailLgn">E-mail:</label>
                            <input className="iptEmL" type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)}></input>
                        </div>
                        <div className="cntDates">
                            <label className="passwordLgn">Password:</label>
                            <input className="iptPwL" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="footerLgn">
                        <div className="btnIn">
                            <button type='submit'>Sing In</button>
                        </div>
                        <div className="txtRgtr">
                            <p>No estas aun registrado? Pulsa <Link className="redirecRgtr" to="/register">Aqui</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
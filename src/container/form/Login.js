import { Link } from 'react-router-dom';
import './Login.scss';
import React,{ useState } from 'react';
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import apiLogin from '../../store/services/apiLogin';

export function Login(){        
    const dispatch = useDispatch();
    const history = useHistory();

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");    

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(apiLogin(email, password));        
    }
    const token = useSelector(state => state.token.jwt)
    const errorLogin = useSelector(state => state.token.error)

    if (token) {
        history.push('/');
    }

    return(
        <form onSubmit={handleSubmit}>
            {errorLogin === true && 
                <h2>ERROR en las credenciales</h2>
            }   
            <div className="fatherLogin">
                <div className="cntLogin">
                    <div className= "headerLgn">
                        <p className="ttlLogin">Login</p>
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
                            <button className="btnSubmit" type='submit'>Sing In</button>
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
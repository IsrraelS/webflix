import React from "react";
import ApiConsumer from "../../util/ApiConsumer";
import './Register.scss';
import { useState } from 'react';

export function Register(){
    let [name, setName] = useState("");
    let [lastname, setLastname] = useState("");
    let [email, setEmail] = useState("");
    let [age, setAge] = useState(0);
    let [password, setPassword] = useState("");

    //recibe del input una fecha, se reliza una diferencia entre la fecha insertada y la actual
    //la difetencia es en milisegundos por lo que al dividirlo entre (1000*60*60*24*365) nos da años
    //la funcion Math.floor() nos da la parte entera de un numero
    const handleAge = (e) => {
        let fechaNacimiento = new Date(e.target.value)
        let hoy = new Date(); // new Date() por defecto usa la fecha de hoy
        let edad = Math.floor((hoy - fechaNacimiento)/(1000*60*60*24*365));
        setAge(edad);        
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let respuesta = await ApiConsumer.register(name, lastname, email, age, password)
        console.log(respuesta)
    }    
    
    return(
        <form onSubmit={handleSubmit}>
            <div className="fatherRegister">
                <div className="cntRegister">
                    <div className="headerRgtr">
                        <p className="ttlRgtr">REGISTER</p>
                    </div>
                    <div className="mainRgtr">
                        <div className="cntDates">
                            <label className="nameRgtr">Name</label>
                            <input type="text" placeholder="Name"
                                name="name" onChange={e => setName(e.target.value)} required></input>
                        </div>
                        <div className="cntDates">
                            <label className="lastNameRgtr">Last Name:</label>
                            <input type="text" placeholder="Last Name" 
                                name="lastname" onChange={e => setLastname(e.target.value)} required></input>
                        </div>
                        <div className="cntDates">
                            <label className="emailRgtr">E-mail:</label>
                            <input type="email" placeholder="E-mail" 
                                name="email" onChange={e => setEmail(e.target.value)} required></input>
                        </div>
                        <div className="cntDates">
                            <label className="dateOfBirthRgtr">Date Of Birth</label>
                            <input type="date" 
                            name="dateOfBirdth" onChange={e => handleAge(e)} required></input>
                        </div>
                        <div className="cntDates">
                            <label className="passwordRgtr">Password:</label>
                            <input type="password" placeholder="Password" 
                            name="password" onChange={e => setPassword(e.target.value)} required></input>
                        </div>
                    </div>
                    <div className="footerRgtr">
                        <div className="cntBtnRG">
                            <button className="btnRgtr" type='Submit'>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
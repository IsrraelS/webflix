import React from "react";
import ApiConsumer from "../../util/ApiConsumer";
import './Register.scss';



export function Register(){

    const crearUsuario = (e) => {
        e.preventDefault();
        console.log(e.target);
    }
    //ApiConsumer.register
    return(
        <form>
        <div className="fatherRegister">
            <div className="cntRegister">
                <div className="headerRgtr">
                    <p className="ttlRgtr">REGISTER</p>
                </div>
                <div className="mainRgtr">
                    <div className="cntDates">
                        <label className="nameRgtr">Name</label>
                        <input className="iptNR" type="text" placeholder="Name"></input>
                    </div>
                    <div className="cntDates">
                        <label className="lastNameRgtr">Last Name:</label>
                        <input className="iptLnR" type="text" placeholder="Last Name" onInput={(e) => function(){}}></input>
                    </div>
                    <div className="cntDates">
                        <label className="emailRgtr">E-mail:</label>
                        <input className="iptEmR" type="email" placeholder="E-mail" onInput={(e) => function(){}}></input>
                    </div>
                    <div className="cntDates">
                        <label className="dateOfBirthRgtr">Date Of Birth</label>
                        <input className="iptDoBR" type="date" onInput={(e) => function(){}}></input>
                    </div>
                    <div className="cntDates">
                        <label className="passwordRgtr">Password:</label>
                        <input className="iptPwR" type="password" placeholder="Password" onInput={(e) => function(){}}></input>
                    </div>
                </div>
                <div className="footerRgtr">
                    <div className="cntBtnRG">
                        <button className="btnRgtr" onClick={(e) => crearUsuario(e)}>Register</button>
                    </div>
                </div>
            </div>
        </div>
        </form>
    )
}
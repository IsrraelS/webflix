import React from "react";
import { Link } from "react-router-dom";
import './Footer.scss'

export function Footer(){

    return(       
        <div className="footer"> 
            <div className="cntFooter">
                <div className="boxFooter">
                <div className="cntFooter">
                    <div className="boxIcons">
                        <div className="icon1"><a href="" ><i className="fab fa-twitter fa-2x"></i></a></div>
                        <div className="icon1"><a href="" ><i className="fab fa-instagram fa-2x"></i></a></div>
                        <div className="icon1"><a href="" ><i className="fab fa-facebook fa-2x"></i></a></div>
                    </div>
                    <div className="boxDR">
                        <p className="reserved">Developed by Gabriel & Israel</p>
                    </div>
                </div>
                </div>
            </div>
        </div>    
    )
}
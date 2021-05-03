import React from "react";
import { Link } from "react-router-dom";
import './Entry.scss'

export function Entry(){

    return(
        <div className="cntEntry">
            <div className="boxEntry">
                <div className="boxTitle">
                    <p className="txtTlt">WEBFLIX</p>
                </div>
                <div className="boxEnter">
                    <Link to="/login" className="enter">ENTER</Link>
                </div>
            </div>
        </div>
    )
}
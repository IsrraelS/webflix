import React from "react";
import './OverFlowRow.scss'
import 'bootstrap/dist/css/bootstrap.css'
import theGodfather from './img/theGodfather.jpeg'
import theGodfather2 from './img/theGodfather2.jpeg'
import BoxMovie from "../boxMovie/BoxMovie";

function OverFlowRow(){

    return(
        <div className="overflow-auto cntMF">
            <BoxMovie></BoxMovie>
            <BoxMovie></BoxMovie>
            <BoxMovie></BoxMovie>
            <BoxMovie></BoxMovie>
            <BoxMovie></BoxMovie>
            <BoxMovie></BoxMovie>
            <BoxMovie></BoxMovie>
    </div>

    )
}

export default OverFlowRow;
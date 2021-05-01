import React from "react";
import './OverFlowRow.scss'
import 'bootstrap/dist/css/bootstrap.css'
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
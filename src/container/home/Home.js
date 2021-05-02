import React from "react";
import './Home.scss'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from '../../components/carousel/Carousel.js'
import OverFlowRow from '../../components/overFlowRow/OverFlowRow.js'

export function Home(){

    return(
        <div className="main">
            <div className="cntMain">
                <div className="boxMain">
                    <div className ="centralMain">
                        <div className="carouselHome">
                            <Carousel></Carousel>
                        </div>
                        <div className="mainFooter">
                            <OverFlowRow genre="Action"/>
                        </div>
                        <div className="mainFooter">
                            <OverFlowRow genre="Comedy"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
 
}    
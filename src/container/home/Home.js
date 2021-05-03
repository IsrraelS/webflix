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
                        <h3>Top 10</h3>
                        <div className="carouselHome">
                            <Carousel></Carousel>
                        </div>
                        <h5>Action</h5>
                        <div className="mainFooter">
                            <OverFlowRow genre="Action"/>
                        </div>
                        <h5>Comedy</h5>
                        <div className="mainFooter">
                            <OverFlowRow genre="Comedy"/>
                        </div>
                        <h5>Suspense</h5>
                        <div className="mainFooter">
                            <OverFlowRow genre="Suspense"/>
                        </div>
                        <h5>Terror</h5>
                        <div className="mainFooter">
                            <OverFlowRow genre="Terror"/>
                        </div>
                        <h5>Drama</h5>
                        <div className="mainFooter">
                            <OverFlowRow genre="Drama"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
 
}    
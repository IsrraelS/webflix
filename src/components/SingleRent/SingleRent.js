import React from "react";
import './SingleRent.scss'

const SingleRent = (props) => {

    return( 
        <div className="cntSingleR">    
            <div className="boxSR">
                <div>{props.user}</div>
                <div>{props.movie}</div>
                <div>{props.startDate}</div>
                <div>{props.endDate}</div>
            </div>
        </div>           
    )
}

export default SingleRent;
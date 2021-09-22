import React from "react";

function Restaurant(props) {

    function handleClick(event) {
        props.handleClick(props.restId);
        console.log("restId " + props.restId);
    }

    return (
        <div>
            <img src={props.image} alt="restaurant" className="res-img" />
            <h4 style={{ fontWeight: "600" }}>{props.name}</h4>
            <p>{props.rating}</p>
            <p>{props.address}</p>
        </div>
    );
}

export default Restaurant;

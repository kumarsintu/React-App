import React from "react";
import "../styles/Restaurant.css";

function Restaurant(props) {
    function handleClick(event) {
        props.handleClick(props.restId);
        console.log("restId " + props.restId);
    }

    return (
        <div>
            <img src={props.image} alt="restaurant" className="res-img" />
            <h4 className="name">{props.name}</h4>
            <p className="rating">{props.rating}⭐</p>
            <p>{props.address}</p>
        </div>
    );
}

export default Restaurant;

import React from "react";
import restaurantlist from "../restaurants";
import Items from "./Items";
import "../styles/Restpagedetails.css";


function Restpagedetails(props) {
  const currentRest = restaurantlist[props.restId];
  const { name, address, description, rating, itemList } = currentRest;

  return (
    <div className="Restdetail">
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
      <p className="address">{address} </p>
      <button className="rating">{rating}⭐</button>
      <hr className="line-hr" />
      <h3 style={{ color: "rgb(237, 90, 107)" }}>  Order Online </h3>
      <Items itemList={itemList} />
    </div>
  );
}

export default Restpagedetails;

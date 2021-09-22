import React from "react";
import { Link } from "react-router-dom";
import restaurantlist from "../restaurants";
import Restaurant from "./Restaurant.js";
import "../styles/Restaurantlist.css";



const Restaurantlist = () => {
    let url;
    return (
        restaurantlist.map((restaurantItem, index) => {
            url = "/restaurentdetails/" + index;
            return <div className="res-container">
                <Link to={url}>
                    <Restaurant
                        restId={restaurantItem.id}
                        key={index}
                        name={restaurantItem.name}
                        address={restaurantItem.address}
                        rating={restaurantItem.rating}
                        image={restaurantItem.imgurl}
                    />
                </Link>
            </div>
        })
    )
}

export default Restaurantlist;

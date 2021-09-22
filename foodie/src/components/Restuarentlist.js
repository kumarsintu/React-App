import React from "react";
import { Link } from "react-router-dom";
import restaurentlist from "../restaurents";
import Restaurant from "./Restaurant.js";



const Restuarentlist = () => {
    let url;
    return (
        restaurentlist.map((restaurantItem, index) => {
            url = "/restaurentdetails/" + index;
            return <div className="container">
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

export default Restuarentlist;
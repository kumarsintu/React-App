import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Restpagedetails from "./Restpagedetails";
import restaurantlist from "../restaurants";
import "../styles/App.css";
import "../styles/Items.css"

const Restpageimages = () => {
    const params = useParams();
    const id = params.restid;

    return (
        <div className="detail-container">
            <div className="rest-images">
                <img key="1" alt="top-img1" className="img-left" src={restaurantlist[id].imgurl} />
                <img alt="top-img2" className="img-middle-top zoom" src="https://b.zmtcdn.com/data/pictures/chains/4/18610904/3f5d6993eb4671a545f8135ea635e318.jpg?fit=around|300:273&crop=300:273;*,*" />
                <img alt="top-img3" className="img-middle-down zoom" src="https://b.zmtcdn.com/data/pictures/chains/4/18610904/ee6a6e668efce019ca1def4525507944.jpeg?fit=around|300:273&crop=300:273;*,*" />
                <img alt="top-img4" className="img-right-top zoom" src="https://b.zmtcdn.com/data/pictures/6/20826/1974e810ff8449e9c0ee82630036b560.jpg?fit=around|300:273&crop=300:273;*,*" />
                <img alt="top-img5" className="img-right-down zoom" src="https://b.zmtcdn.com/data/pictures/chains/3/19264953/1c6409dcd5379e6c536d312eadbcd41d.jpeg?fit=around|300:273&crop=300:273;*,*" />
            </div>
            <div style={{ position: "relative" }}>
                <Restpagedetails restId={id} />
            </div>
        </div>
    )
}

export default Restpageimages;

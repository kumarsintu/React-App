import React, { useState } from "react";
import Header from "./Header";
import Restdetails from "./Restdetails";
import Restaurant from "./Restaurant";
import restaurentlist from "../restaurents";



function App() {
  const [restId, setRestId] = useState(0);
  const [flag, setFlag] = useState(1);
  var currentResturent;

  function handleClick(id) {
    setFlag(!flag);
    setRestId(id);
    currentResturent = restaurentlist[id - 1];
    console.log("current restaurant + " + currentResturent);
  }
  function handleBackButton() {
    setFlag(!flag);
  }
  return (
    <div className="app-body">
      <Header />
      {
        flag ?
          restaurentlist.map((restaurantItem, index) => {
            return <div className="container">
              <Restaurant
                restId={restaurantItem.id}
                key={index}
                name={restaurantItem.name}
                address={restaurantItem.address}
                rating={restaurantItem.rating}
                image={restaurantItem.imgurl}
                handleClick={handleClick}
              />
            </div>
          })
          :
          <div className="detail-container">
            <button className="left-btn" onClick={handleBackButton}>&larr;</button>
            <div className="rest-images">
              <img key="1" alt="top-img1" className="img-left" src={restaurentlist[restId - 1].imgurl} />
            </div>
            <div style={{ position: "relative" }}>
              <Restdetails restId={restId} />
            </div>
          </div>
      }

    </div>
  );
}
export default App;

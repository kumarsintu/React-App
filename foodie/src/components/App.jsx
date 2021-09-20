import React, { useState } from "react";
import Header from "./Header";
import Restdetails from "./Restdetails";
import Restaurant from "./Restaurant";
import restaurentlist from "../restaurents";
import Signin from "./Signin";
import "../styles/App.css";


function App() {
  const [restId, setRestId] = useState(0);
  const [flag, setFlag] = useState(1);
  const [signFlag, setSignFlag] = useState(1);
  var currentResturent;

  function handleClick(id) {
    setFlag(!flag);
    setRestId(id);
    currentResturent = restaurentlist[id - 1];
  }
  function handleBackButton() {
    setFlag(!flag);
  }

  function handleSigninClick() {
    setSignFlag(!signFlag);
  }


  return (
    <div className="app-body">
      {
        signFlag ?
          <div>
            <Header handleSigninClick={handleSigninClick} />
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
                    <img alt="top-img2" className="img-middle-top zoom" src="https://b.zmtcdn.com/data/pictures/chains/4/18610904/3f5d6993eb4671a545f8135ea635e318.jpg?fit=around|300:273&crop=300:273;*,*" />
                    <img alt="top-img3" className="img-middle-down zoom" src="https://b.zmtcdn.com/data/pictures/chains/4/18610904/ee6a6e668efce019ca1def4525507944.jpeg?fit=around|300:273&crop=300:273;*,*" />
                    <img alt="top-img4" className="img-right-top zoom" src="https://b.zmtcdn.com/data/pictures/6/20826/1974e810ff8449e9c0ee82630036b560.jpg?fit=around|300:273&crop=300:273;*,*" />
                    <img alt="top-img5" className="img-right-down zoom" src="https://b.zmtcdn.com/data/pictures/chains/3/19264953/1c6409dcd5379e6c536d312eadbcd41d.jpeg?fit=around|300:273&crop=300:273;*,*" />
                  </div>
                  <div style={{ position: "relative" }}>
                    <Restdetails restId={restId} />
                  </div>
                </div>
            }

          </div>
          :
          <Signin />
      }
    </div >
  );
}
export default App;

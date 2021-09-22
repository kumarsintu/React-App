import React, { useState } from "react";
import restaurentlist from "../restaurents";
import Items from "./Items";
import Orderdetails from "./Orderdetails";
import "../styles/Restdetails.css";


function Restdetails(props) {
  console.log(props);
  const currentRest = restaurentlist[props.restId];
  const { name, address, description, rating, itemList } = currentRest;
  const [totalPrice, setPrice] = useState(0);
  const [itemCount, setitemCount] = useState(0);
  const [cartItems, setcartItems] = useState([]);

  const addCartItem = (item) => {
    setcartItems(prevValue => {
      return ([...prevValue, item]);
    })
    console.log(cartItems);
  }
  const removeCartItem = (item) => {
    let index = cartItems.indexOf(item);
    cartItems.splice(index, 1);
    setcartItems(prevValue => {
      return (cartItems);
    });
    console.log(cartItems);
  }

  const handleAddPrice = (clickedItem) => {
    setitemCount(prevValue => { return (prevValue + 1) });
    setPrice(prevValue => { return (prevValue + clickedItem.itemPrice) });
  }
  const handleRemovePrice = (clickedItem) => {
    setitemCount(prevValue => { return (prevValue - 1) });
    setPrice(prevValue => { return (prevValue - clickedItem.itemPrice) });
  }

  return (
    <div className="Restdetail">
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
      <p className="address">{address} </p>
      <button className="rating">{rating}⭐</button>
      <hr className="line-hr" />
      <h3 style={{ color: "rgb(237, 90, 107)" }}>  Order Online </h3>
      {itemList.map(item => {
        return (<Items item={item}
          handleAddPrice={handleAddPrice}
          handleRemovePrice={handleRemovePrice}
          addCartItem={addCartItem}
          removeCartItem={removeCartItem}
          key={item.itemId}
        />);
      })}
      {totalPrice > 0 ?
        <Orderdetails itemCount={itemCount} totalPrice={totalPrice} cartItems={cartItems} key={1} />
        : null
      }
    </div>
  );
}

export default Restdetails;

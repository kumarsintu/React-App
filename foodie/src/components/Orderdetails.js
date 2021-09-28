import React,{useState} from 'react';
import Togglecart from "./Togglecart";
import {Link} from "react-router-dom";
import "../styles/Orderdetails.css";


function Orderdetails(props){
  const {totalItemCount,totalPrice,cartItems}=props;
  const [fullDetailFlag,setfullDetailFlag]=useState(false);

  const [priceTotal,setPriceTotal]=useState(totalPrice);
  const [totalCount,setTotalCount]=useState(totalItemCount);

  function handleToggleDetails(){
      setfullDetailFlag(!fullDetailFlag);
  }
  function handleAddPrice(item){
      setPriceTotal(prevValue=>prevValue+item.itemPrice);
  }
  function handleRemovePrice(item){
      setPriceTotal(prevValue=>prevValue-item.itemPrice);
  }

  return (
      <div>
          <div className="order-details">
            <button className="btn btn-lg detail-order-btn" onClick={handleToggleDetails}>Toggle</button>
            <h4 className="item-count">Your Order ({totalItemCount})</h4>
            <h4 className="total-price">Subtotal: ₹{totalPrice} </h4>
            <Link to="/cart"> <button className="btn btn-lg continuebtn">Continue</button></Link>
          </div>



              { fullDetailFlag ?
                <div className="toggle-full-cart">
                    <h3>Your Orders</h3>
                    <hr />
                    {cartItems.map((item,index) =>
                      <Togglecart
                            item={item}
                            key={index}
                            handleAddPrice={handleAddPrice}
                            handleRemovePrice={handleRemovePrice}
                      />
                    )}
                </div>
                : null
              }


      </div>
  )
}

export default Orderdetails;

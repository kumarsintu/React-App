import React from 'react';
import {Link} from "react-router-dom";
import "../styles/Orderdetails.css";


function Orderdetails(props){
  const {totalItemCount,totalPrice,cartItems}=props;

  return (
      <div>
          <div className="order-details">
            <h4 className="item-count">Your Order ({totalItemCount})</h4>
            <h4 className="total-price">Subtotal: ₹{totalPrice} </h4>
            <Link to={{pathname:"/carts",state:{cartItems:cartItems}}}> <button className="btn btn-lg continuebtn">Continue</button></Link>
          </div>
      </div>
  )
}

export default Orderdetails;

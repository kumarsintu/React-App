import React from 'react';
import {Link} from "react-router-dom";
import "../styles/Ordersummary.css";


function Ordersummary(props){
  const {totalItemCount,totalPrice}=props;

  return (
      <div>
          <div className="order-details">
            <h4 className="item-count">Your Order ({totalItemCount})</h4>
            <h4 className="total-price">Subtotal: ₹{totalPrice} </h4>
            <Link to={{pathname:"/cart"}}>
                <button className="btn btn-lg continuebtn">Continue</button>
            </Link>
          </div>
      </div>
  )
}

export default Ordersummary;

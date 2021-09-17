import React from 'react';


function Orderdetails(props){
  const {itemCount,totalPrice}=props;
  console.log("Orderdetails called now ");
  return (
    <div className="order-details">
      <h4 className="item-count">Your Order ({itemCount})</h4>
      <h4 className="total-price">Subtotal: ₹{totalPrice} </h4>
      <button className="btn btn-lg continuebtn">Continue</button>
    </div>
  )
}

export default Orderdetails;

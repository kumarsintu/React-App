import React,{useState} from 'react';
import "../styles/Orderdetails.css";


function Orderdetails(props){
  const {itemCount,totalPrice,cartItems}=props;
  const [fullDetailFlag,setfullDetailFlag]=useState(false);

  function handleToggleDetails(){
      setfullDetailFlag(!fullDetailFlag);
  }
  function handleAdd(){

  }
  function handleRemove() {

  }


  return (
    <div>
          {fullDetailFlag ?
                  <div className="toggle-full-cart">
                    <h3>Your Orders</h3>
                    <hr />
                    {cartItems.map(item => {
                        return(
                          <div>
                              <div className="toggle-div">
                                    <h4 className="toggle-itemname">{item.itemName}</h4>
                                    <h4 className="toggle-itemprice">₹{item.itemPrice}</h4>
                                    <span className="toggle-item-span">
                                      <button onClick={handleRemove} className="toggle-remove-btn">-</button>
                                      <p className="toggle-item-count">4</p>
                                      <button onClick={handleAdd} className="toggle-add-btn">+</button>
                                    </span>
                              </div>
                              <hr />
                          </div>
                        );
                    })}
                  </div>
                : null
          }

        <div className="order-details">
          <button className="btn btn-lg detail-order-btn" onClick={handleToggleDetails}>Toggle</button>
          <h4 className="item-count">Your Order ({itemCount})</h4>
          <h4 className="total-price">Subtotal: ₹{totalPrice} </h4>
          <button className="btn btn-lg continuebtn">Continue</button>
        </div>


    </div>
  )
}

export default Orderdetails;

import React,{useState} from 'react';
import {useLocation} from 'react-router-dom';
import "../styles/Cart.css";


const Cartitem=(props) =>{
  const item=props.item;
  const [itemCount,setItemCount]=useState(item.itemCount);

  function handleAdd(){
    console.log("handleAdd called");
    setItemCount(prevValue=>prevValue+1);
    item["itemCount"]=item["itemCount"]+1;
    props.handleAddPrice(item);
  }

  function handleRemove() {
    console.log("handleRemove called");
    if(itemCount>0){
        setItemCount(prevValue=>prevValue-1);
        item["itemCount"]=item["itemCount"]-1;
        props.handleRemovePrice(item);
    }
  }

  return(
      <div>
          <div className="toggle-div">
                <h4 className="toggle-itemname">{item.itemName}</h4>
                <h4 className="toggle-itemprice">₹{item.itemPrice*itemCount}</h4>
                <span className="toggle-btn-span">
                  <button onClick={handleRemove} className="toggle-remove-btn">-</button>
                  <p className="toggle-item-count">{itemCount}</p>
                  <button onClick={handleAdd} className="toggle-add-btn">+</button>
                </span>
          </div>
          <hr />
      </div>
    );
}


const Cart = (props) => {
  const location = useLocation();
  const {cartItems,totalPrice,totalItemCount}=location.state;
  console.log(location.state);

  const [priceTotal,setPriceTotal]=useState(totalPrice);
  const [totalCount,setTotalCount]=useState(totalItemCount);
  function handleAddPrice(item){
      setPriceTotal(prevValue=>prevValue+item.itemPrice);
      setTotalCount(prevValue=>prevValue+1);
  }
  function handleRemovePrice(item){
      setPriceTotal(prevValue=>prevValue-item.itemPrice);
      setTotalCount(prevValue=>prevValue-1);
  }
  return (
    <div className="toggle-full-cart">
        <h3>Your Orders</h3>
        <hr />
        { cartItems.map((item,index) =>
          <Cartitem
                item={item}
                key={index}
                handleAddPrice={handleAddPrice}
                handleRemovePrice={handleRemovePrice}
          />
        )}
        <div className="total-summary">
          <p className="summary-para">Grand Total ({totalCount})</p>
          <h4 className="grand-total">₹{priceTotal}</h4>
          <button className="btn btn-lg continue-payment-btn"> Continue to Payment </button>
        </div>

    </div>
  );
}

export default Cart;

import React,{useState} from 'react';
import {useLocation} from 'react-router-dom';
import "../styles/Cart.css";


const Togglecart=(props) =>{
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
    setItemCount(prevValue=>prevValue-1);
    item["itemCount"]=item["itemCount"]-1;
    props.handleRemovePrice(item);
  }

  return(
      <div>
          <div className="toggle-div">
                <h4 className="toggle-itemname">{item.itemName}</h4>
                <h4 className="toggle-itemprice">₹{item.itemPrice*itemCount}</h4>
                <span className="toggle-item-span">
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
  const {cartItems}=location.state;
  console.log(cartItems);

  const [priceTotal,setPriceTotal]=useState(props.totalPrice);
  const [totalCount,setTotalCount]=useState(props.totalItemCount);
  function handleAddPrice(item){
      setPriceTotal(prevValue=>prevValue+item.itemPrice);
  }
  function handleRemovePrice(item){
      setPriceTotal(prevValue=>prevValue-item.itemPrice);
  }
  return (
    <div className="toggle-full-cart">
        <h3>Your Orders</h3>
        <hr />
        { cartItems.map((item,index) =>
          <Togglecart
                item={item}
                key={index}
                handleAddPrice={handleAddPrice}
                handleRemovePrice={handleRemovePrice}
          />
        )}
    </div>
  );
}

export default Cart;

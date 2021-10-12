import React,{useState} from 'react';
import "../styles/Cart.css";
import {useSelector,useDispatch} from "react-redux";
import {cartActions} from "../store/index";


const Cartitem=(props) =>{
  const item=props.item;
  const dispatch=useDispatch();
  const [itemCount,setItemCount]=useState(item.itemCount);

  function handleAdd(){
    setItemCount(prevValue=>prevValue+1);
    dispatch(cartActions.addItem(item));
  }

  function handleRemove() {
    setItemCount(prevValue=>prevValue-1);
    dispatch(cartActions.removeItem(item));
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
  const cartItems  = useSelector(state=>state.cartSlice.cartItems);
  const priceTotal = useSelector(state=>state.cartSlice.totalPrice);
  const totalCount = useSelector(state=>state.cartSlice.totalItemCount);

  return (
    <div className="toggle-full-cart">
        <h3>Your Orders</h3>
        <hr />
        { cartItems.map((item,index) =>
          <Cartitem
                key={item.itemId}
                item={item}
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

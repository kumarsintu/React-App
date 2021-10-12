import React,{useState} from "react";
import "../styles/Items.css";
import Ordersummary from "./Ordersummary";
import {cartActions} from "../store/index";
import {useSelector,useDispatch} from "react-redux";


function Item(props){
  const dispatch=useDispatch();
  const currItem=props.item;
  const cartItems=props.cartItems;
  const itemInCart=cartItems.find(item=>item.itemId===currItem.itemId);
  const itemFinalCount=itemInCart?itemInCart.itemCount:0;
  const {itemName,itemImg,itemPrice,itemRating,itemDescription,itemCount}=currItem;
  const [currItemCount,setcurrItemCount]=useState(itemFinalCount);

  const handleAdd=()=> {
    dispatch(cartActions.addItem(currItem));
    setcurrItemCount(prevValue=>{return(prevValue+1)});
  }
  const handleRemove=()=>{
    dispatch(cartActions.removeItem(currItem));
    setcurrItemCount(prevValue=>prevValue-1);
  }
  return(
      <div className="item-container">
        <img alt="item-img" src={itemImg} className="item-img"/>
        <div className="item-detail">
          <h4 className="item-header">{itemName}</h4>
          <div className="rating-container">
              {[...Array(itemRating)].map((e,i) => {
                return(<span key={i}><img alt="star" className="item-rating-star-yellow" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/298/star_2b50.png" /> </span>)
              })
              }
              {[...Array(5-itemRating)].map((e,i) => {
                return(<span key={i}><img alt="star" className="item-rating-star-white" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/docomo/205/white-medium-star_2b50.png" /> </span>)
              })
              }
          </div>
          <p className="item-price">₹{itemPrice}</p>
          <p className="item-description">{itemDescription}</p>
          {currItemCount>0 ?
              <span className="changed-item-span">
                <button onClick={handleRemove} className="changed-remove-btn">-</button>
                <p className="changed-item-count">{currItemCount}</p>
                <button onClick={handleAdd} className="changed-add-btn">+</button>
              </span>
              : <button className="add-item-btn" onClick={handleAdd}> ADD +</button>
          }
        </div>
    </div>
  );
}

function Items(props){
  const items=props.itemList;
  const totalPrice = useSelector(state=>state.cartSlice.totalPrice);
  const totalItemCount =useSelector(state=>state.cartSlice.totalItemCount);
  const cartItems = useSelector(state=>state.cartSlice.cartItems);

  return (
    <div>
      {items.map((item,index)=>
         <Item
            key={item.itemId}
            item={item}
            cartItems={cartItems}
          /> )
      }
      {totalPrice > 0 ?
        <Ordersummary totalItemCount={totalItemCount} totalPrice={totalPrice} />
        : null
      }
    </div>
  )
}

export default Items;

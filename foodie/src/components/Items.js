import React,{useState} from "react";
import "../styles/Items.css";
import Orderdetails from "./Orderdetails";


function Item(props){
  const curritem=props.item;
  const cartItems=props.cartItems;
  const {itemName,itemImg,itemPrice,itemRating,itemDescription,itemCount}=curritem;
  const [currItemCount,setcurrItemCount]=useState(itemCount?itemCount:0);

  if(currItemCount!==0 && !cartItems.includes(curritem)){
    props.addCartItem(curritem);
    props.handleAddPrice(curritem,currItemCount);
  }

  const handleAdd=()=> {
    props.handleAddPrice(curritem,1);
    if(currItemCount===0){
      props.addCartItem(curritem);
    }
    curritem["itemCount"]=currItemCount+1;
    setcurrItemCount(prevValue => {
      return(prevValue+1);
    })
  }
  const handleRemove=()=>{
    props.handleRemovePrice(curritem);
    if(currItemCount===1){
      props.removeCartItem(curritem);
    }
    curritem["itemCount"]=currItemCount-1;
    setcurrItemCount(prevValue=>{
      return(prevValue-1);
    })
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
              </span> : <button className="add-item-btn" onClick={handleAdd}> ADD +</button>
          }
        </div>
    </div>
  );
}

function Items(props){
  const items=props.itemList;
  const [totalPrice, setPrice] = useState(0);
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [cartItems, setcartItems] = useState([]);

  const addCartItem = (item) => {
    setcartItems(prevValue => {
      return ([...prevValue, item]);
    })
  }

  const removeCartItem = (item) => {
    let index = cartItems.indexOf(item);
    cartItems.splice(index, 1);
    setcartItems(prevValue => {
      return (cartItems);
    });
  }

  const handleAddPrice=(clickedItem,count) => {
    setTotalItemCount(prevValue => { return (prevValue + count) });
    setPrice(prevValue => { return (prevValue + (clickedItem.itemPrice)*count) });
  }

  const handleRemovePrice= (clickedItem) => {
    setTotalItemCount(prevValue => { return (prevValue - 1) });
    setPrice(prevValue => { return (prevValue - clickedItem.itemPrice) });
  }

  return (
    <div>
      {items.map((item,index)=>
         <Item
            item={item}
            handleAddPrice={handleAddPrice}
            handleRemovePrice={handleRemovePrice}
            addCartItem={addCartItem}
            removeCartItem={removeCartItem}
            cartItems={cartItems}
            key={index}
          /> )
      }
      {totalPrice > 0 ?
        <Orderdetails totalItemCount={totalItemCount} totalPrice={totalPrice} cartItems={cartItems} key={1} />
        : null
      }
      <h1>{totalPrice}</h1>
    </div>
  )
}

export default Items;

import React,{useState} from "react";
import "../styles/Items.css";


function Items(props){
  const curritem=props.item;
  const {itemName,itemImg,itemPrice,itemRating,itemDescription}=curritem;

  const [currItemCount,setcurrItemCount]=useState(0);

  function handleClick() {
    props.handleAddPrice(curritem);
    setcurrItemCount(prevValue => {
      return(prevValue+1);
    })
  }
  function handleRemove(){
    props.handleRemovePrice(curritem);
    setcurrItemCount(prevValue=>{
      return(prevValue-1);
    })
  }
  console.log(itemPrice);
  return (
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
            <button onClick={handleClick} className="changed-add-btn">+</button>
          </span> : <button className="add-item-btn" onClick={handleClick}> ADD +</button>
        }
      </div>
    </div>
  )
}

export default Items;

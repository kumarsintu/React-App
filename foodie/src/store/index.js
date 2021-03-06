import {createSlice,configureStore} from "@reduxjs/toolkit";

const initialCartState={totalPrice:0,totalItemCount:0,cartItems:[]};

const cartSlice = createSlice({
  name:'totalPriceSlice',
  initialState:initialCartState,
  reducers : {
    addItem(state,action){
        const currItem={...action.payload};
        var firstFlag=0;
        if(!state.cartItems.find(item=>item.itemId===action.payload.itemId)){
          state.cartItems.push(currItem);
          firstFlag=1;
        }
        const reqItem=state.cartItems.find(item=>item.itemId===action.payload.itemId);
        firstFlag===1?reqItem.itemCount=1:reqItem.itemCount=reqItem.itemCount+1;
        state.totalPrice=state.totalPrice+action.payload.itemPrice;
        state.totalItemCount=state.totalItemCount+1;
    },
    removeItem(state,action){
        const currItem = state.cartItems.find(item=>item.itemId===action.payload.itemId);
        currItem.itemCount=currItem.itemCount-1;
        if(currItem.itemCount===0){
          state.cartItems=state.cartItems.filter(item=>item.itemId!==action.payload.itemId);
        }
        state.totalPrice=state.totalPrice-action.payload.itemPrice;
        state.totalItemCount>=1?state.totalItemCount=state.totalItemCount-1:state.totalItemCount=0;
    }
  }
});

const store = configureStore({
  reducer:{cartSlice:cartSlice.reducer}
});

export const cartActions = cartSlice.actions;

export default store;

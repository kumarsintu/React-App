import {createSlice,configureStore} from "@reduxjs/toolkit";

const initialPriceState={totalPrice:0,totalItemCount:0};
const totalPrice = createSlice({
  name:'totalPriceSlice',
  inititalState:initialPriceState,
  reducers : {
    addItemPrice(state,action){
        state.totalPrice=state.totalPrice+action.price;
        state.totalItemCount=state.totalItemCount+1;
    },
    removeItemPrice(state,action){
      state.totalPrice=state.totalPrice-action.price;
      state.totalItemCount>=1?state.totalItemCount=state.totalItemCount-1:state.totalItemCount=0;
    }
  }
});

const store = configureStore({
  reducer:{totalPrice:totalPrice.reducer}
});

export const priceActions = totalPrice.reducer;

export default store;

import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header";

import SignUp from "./SignUp";
import Restaurantlist from "./Restaurantlist";
import Restitem from "./Restitem";
import Signin from "./Signin";
import Cart from "./Cart";
import "../styles/App.css"



const App = () => {

  return (
    <div className="app-body">
      <Header />
      <Route exact path="/" component={Restaurantlist} />
      <Route path="/restuarent" component={Restaurantlist} />
      <Route exact path="/carts" component={Cart} />  
      <Route exact path="/restaurentdetails/:restid" component={Restitem} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={SignUp} />


    </div >
  );
}
export default App;

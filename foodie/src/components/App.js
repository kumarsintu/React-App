import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header";

import SignUp from "./SignUp";
import Restaurantlist from "./Restaurantlist";
import Restpageimages from "./Restpageimages";
import Signin from "./Signin";
import Cart from "./Cart";
import "../styles/App.css"



const App = () => {

  return (
    <div className="app-body">
      <Header />
      <Route exact path="/" component={Restaurantlist} />
      <Route path="/restuarent" component={Restaurantlist} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/restaurentdetails/:restid" component={Restpageimages} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={SignUp} />


    </div >
  );
}
export default App;

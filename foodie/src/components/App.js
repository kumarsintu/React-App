import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header";

import SignUp from "./SignUp";
import Restuarentlist from "./Restuarentlist";
import Restitem from "./Restitem";
import Signin from "./Signin";
import "../styles/App.css"



const App = () => {

  return (
    <div className="app-body">
      <Header />
      <Route exact path="/" component={Restuarentlist} />
      <Route path="/restuarent" component={Restuarentlist} />
      <Route path="/restaurentdetails/:restid" component={Restitem} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={SignUp} />

    </div >
  );
}
export default App;

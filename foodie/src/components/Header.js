import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Header.css";

function Header(props) {
  function handleSigninClick(event) {
    props.handleSigninClick();
    event.preventDefault();
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid header-section">
        <NavLink className="heading" to="/"><h1 ><strong>Foodie</strong></h1></NavLink>
        <div className="link-div">
          <NavLink to="/signin" className="nav-item links">Sign in</NavLink>
          <NavLink to="/signup" className="nav-item links" >Sign up</NavLink>
        </div>
      </div>

    </nav>
  )
}

export default Header;

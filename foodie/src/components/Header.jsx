import React from 'react';
import "../styles/Header.css";

function Header(props) {
  function handleSigninClick(event) {
    props.handleSigninClick();
    event.preventDefault();
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid header-section">
        <a className="heading" href="www.google.com"><h1 ><strong>Foodie</strong></h1></a>
        <div className="link-div">
          <a href="www.google.com" className="nav-item links" onClick={handleSigninClick}>Log in</a>
          <a href="www.google.com" className="nav-item links" >Sign up</a>
        </div>
      </div>

    </nav>
  )
}

export default Header;

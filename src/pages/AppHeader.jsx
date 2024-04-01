import React from "react";
import "../styles/AppHeader.css";

function AppHeader() {
  return (
    <div id="app-header">
      <h1 id="logo">Logo</h1>
      <nav id="header-nav">
        <ul className="nav-options">Home</ul>
        <ul className="nav-options">Service</ul>
        <ul className="nav-options">Blog</ul>
        <ul className="nav-options">About</ul>
      </nav>
      <div id="join-btn-div">
        <button id="join-btn">Join us</button>
      </div>
    </div>
  );
}

export default AppHeader;

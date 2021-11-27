import React from "react";
import "../styles/navBar.css";

export default function NavBar({ setInputValue, inputValue, search }) {
  return (
    <div className="navbar">
      <span className="heading">MOVIE DB</span>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyPress={search}
        type="text"
        placeholder="Enter Movie Name..."
        className="search-bar"
      />
      <p>Login</p>
    </div>
  );
}

import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="brand">
        {/* <img className="brand_logo" src="/images/logo.png" alt="logo" /> */}
        <span className="brand_name">Phonebook</span>
      </div>
      <div className="profile">
        <button onClick={() => alert("Hello User")}>{`Mohit`}</button>
      </div>
    </div>
  );
}

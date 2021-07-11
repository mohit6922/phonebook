import React from "react";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";
import "./Main.css";
export default function Main() {
  return (
    <div className="main">
      <SearchBox />
      <SearchResult />
    </div>
  );
}

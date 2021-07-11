import React from "react";
import RadioSlider from "./RadioSlider";
import "./SearchBox.css";
export default function SearchBox() {
  return (
    <div className="search-box">
      <RadioSlider
        name="searchField"
        options={[
          { placeholder: "Name", value: "name", checked: true },
          { placeholder: "Phone", value: "phone", checked: false },
        ]}
        onChange={(value) => {
          console.log(`Searching only ${value}`);
        }}
      />
      <input
        className="search-box__input"
        type="text"
        placeholder="Search here..."
      />
      <button className="search-box__btn">Search</button>
    </div>
  );
}

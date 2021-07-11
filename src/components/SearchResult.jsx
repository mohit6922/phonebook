import React, { useState } from "react";
import CardGroup from "./CardGroup";
import ListGroup from "./ListGroup";
import RadioSlider from "./RadioSlider";
import "./SearchResult.css";
export default function SearchResult() {
  const [viewOption, setViewOption] = useState("card");
  let items = [
    { id: "101", name: "Mohit Soni", phone: ["9818926922", "9643484063"] },
    { id: "102", name: "Shahrukh Khan", phone: ["9818926922", "9643484063"] },
    { id: "103", name: "Abhishek Bachan", phone: ["9818926922", "9643484063"] },
    { id: "104", name: "Akshay Kumar", phone: ["9818926922", "9643484063"] },
    { id: "105", name: "Rajkumar Rao", phone: ["9818926922", "9643484063"] },
  ];
  return (
    <div className="search-result">
      <RadioSlider
        name="viewOption"
        options={[
          { placeholder: "List", value: "list" },
          { placeholder: "Card", value: "card" },
        ]}
        onChange={(value) => {
          setViewOption(value);
        }}
      />
      <div className="wrapper">
        {viewOption === "list" ? (
          <ListGroup items={items} />
        ) : (
          <CardGroup items={items} />
        )}
      </div>
    </div>
  );
}

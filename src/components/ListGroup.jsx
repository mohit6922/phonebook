import React from "react";
import "./ListGroup.css";
export function ListItem({ item }) {
  return (
    <div className="list-item">
      <img src={`/images/users/${item.id}`} alt={`${item.id}`} />
      <h3 className="primary">{item.name}</h3>
      <div className="phone">
        {item.phone.map((k, idx) => (
          <h3 key={idx} className="secondary">
            {k}
          </h3>
        ))}
      </div>
      <button className="info">?</button>
    </div>
  );
}
export default function ListGroup({ items }) {
  return (
    <div className="list-group">
      {items.map((item) => {
        return <ListItem key={item.id} item={item} />;
      })}
    </div>
  );
}

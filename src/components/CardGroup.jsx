import React from "react";
import "./CardGroup.css";
export function CardItem({ item }) {
  return (
    <div className="card-item">
      <img src={`/images/users/${item.id}.jpg`} alt={`${item.id}`} />
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
export default function CardGroup({ items }) {
  return (
    <div className="card-group">
      {items.map((item) => {
        return <CardItem key={item.id} item={item} />;
      })}
    </div>
  );
}

import React from "react";

const Delete = ({ item, onDelete }) => {
  return (
    <div className="order-card">
      <img src={item.image} alt={item.name} className="order-image" />
      <div className="order-details">
        <h4>{item.name.toUpperCase()}</h4>
        <p>Quantity : {item.quantity}</p>
        <p style={{ color: "orange" }}>₹{item.price * item.quantity}</p>
      </div>
      <button className="trash-btn" onClick={onDelete}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

export default Delete;

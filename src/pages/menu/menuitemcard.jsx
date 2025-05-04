import React, { useState } from "react";

const MenuItemCard = ({
  name,
  description,
  image,
  price,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    const newQty = quantity + 1;
    setQuantity(newQty);
    onQuantityChange(name, newQty, price, image);
  };

  const decrement = () => {
    const newQty = quantity > 0 ? quantity - 1 : 0;
    setQuantity(newQty);
    onQuantityChange(name, newQty, price, image);
  };

  const totalPrice = quantity * price;

  return (
    <div className="menu-item2" style={{ marginBottom: "20px" }}>
      <img
        src={image}
        alt={name}
        style={{ height: "100px", width: "100px", borderRadius: "50%" }}
      />
      <div className="menu-item2-text">
        <p
          className="food-name"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {name}
        </p>
        <p className="description">{description}</p>
        <h4 className="price">₹{totalPrice}</h4>
      </div>
      <div
        style={{
          marginLeft: "170px",
          display: "flex",
          alignItems: "center",
          gap: "100px",
        }}
      >
        <button onClick={decrement} style={{ padding: "5px 10px" }}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={increment} style={{ padding: "5px 10px" }}>
          +
        </button>
      </div>
    </div>
  );
};

export default MenuItemCard;

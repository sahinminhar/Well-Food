import React, { useState } from "react";
import "../../../assets/css/style.css";

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

  return (
    <div className="card-container">
      <img src={image} alt={name} className="item-image" />
      <div className="item-info">
        <h5 className="item-name">{name.toUpperCase()}</h5>
        <p className="item-description">{description}</p>
        <h6 className="item-price">₹{price}</h6>
        <div className="quantity-control">
          <button onClick={decrement}>-</button>
          <span>{quantity}</span>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;

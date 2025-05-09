import React, { useState, useEffect } from "react";
import Delete from "./delete";
import "../../../assets/css/style.css";
import { Spinner } from "react-bootstrap";

const Checkout = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const handleDelete = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-container">
      <h2 className="title">ORDER SUMMARY</h2>
      <div className="checkout-content">
        {/* Left: Order Summary Card */}
        <div className="order-box">
          {cart.map((item, index) => (
            <Delete
              key={item.name}
              item={item}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>

        {/* Right: Placeholder for Spinner */}
        <div className="spinner-box">
          
          <h4>Spin for offer</h4>
          <div className="spinner-placeholder"></div>
        </div>
        <Spinner />
        <div className="order-footer">
          <h3>Total : ₹{totalAmount}</h3>
          <button className="pay-btn">Pay</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

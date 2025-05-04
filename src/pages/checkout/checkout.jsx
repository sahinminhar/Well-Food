import React from "react";

const Checkout = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Order Summary</h2>
      {cart.map((item) => (
        <div key={item.name} style={{ marginBottom: "20px" }}>
          <img src={item.image} alt={item.name} style={{ height: "100px", width: "100px", borderRadius: "50%" }} />
          <p className="food-name">{item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ₹{item.price * item.quantity}</p>
        </div>
      ))}
      <h3 className="price">Total: ₹{totalAmount}</h3>
    </div>
  );
};

export default Checkout;

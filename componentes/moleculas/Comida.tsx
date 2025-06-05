// components/Comida.jsx
"use client";
import React, { useState } from "react";

const Comida = ({ image, name, description, price }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="snack">
      <img src={image} alt={name} className="snack-image" />
      <div className="snack-info">
        <h3 className="pipocas pi">{name}</h3>
        <p className="pipocas">{description}</p>
        <p className="price">{price} Bs</p>
        <div className="quantity-control">
          <button onClick={handleDecrease} aria-label="Disminuir cantidad">−</button>
          <span>{quantity}</span>
          <button onClick={handleIncrease} aria-label="Aumentar cantidad">+</button>
        </div>
        {quantity > 0 && (
          <p className="total-item">
            Total: {price * quantity} Bs
          </p>
        )}
      </div>
    </div>
  );
};

export default Comida;

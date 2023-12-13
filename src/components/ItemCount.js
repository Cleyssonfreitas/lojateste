import React, { useState } from 'react';

const ItemCount = ({ initial, onAdd, stock }) => {
  const [quantity, setQuantity] = useState(initial);

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (onAdd) {
      const newQuantity = quantity > stock ? stock : quantity;
      onAdd(newQuantity);
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
      <p>Estoque disponível: {stock}</p>
    </div>
  );
};

export default ItemCount;
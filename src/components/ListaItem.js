import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({ greeting }) => {
  const handleAddToCart = (quantity) => {

    console.log(`Adicionar ${quantity} itens ao carrinho`);
  };

  return (
    <div className="container mt-4">
      <h1 className="display-4">{greeting}</h1>
      <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />
    </div>
  );
}

export default ItemListContainer;
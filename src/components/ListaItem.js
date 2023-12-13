
import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import ItemCount from './ItemCount';

function ListaItem() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'coca cola',
      description: 'Bebida ',
      price: 7.99,
      pictureUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Bolacha',
      description: 'Uma bolacha deliciosa',
      price: 2.50,
      pictureUrl: 'https://via.placeholder.com/150',
    },
  ]);
 const [stocks, setStocks] = useState({
  1: 10, 
  2: 5,  
});

useEffect(() => {
  const fetchData = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  fetchData();
}, []);

const handleAddToCart = (productId, quantity) => {
  console.log(`Adicionar ${quantity} itens do Produto ${productId} ao carrinho`);

  if (quantity <= stocks[productId]) {
    setStocks((prevStocks) => ({
      ...prevStocks,
      [productId]: prevStocks[productId] - quantity,
    }));

    console.log(`Adicionando ${quantity} itens do Produto ${productId} ao carrinho.`);
  } else {
    console.log(`Não há estoque suficiente do Produto ${productId} para adicionar ao carrinho.`);
  }
};

return (
  <div className="container mt-4">
    <h2>Produtos</h2>
    {items.map((item) => (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <ItemCount initial={1} onAdd={(quantity) => handleAddToCart(item.id, quantity)} stock={stocks[item.id]} />
      </div>
    ))}
    <ItemList items={items} />
  </div>
);
}

export default ListaItem;
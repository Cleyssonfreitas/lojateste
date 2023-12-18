import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const getItem = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: 'coca cola',
          description: 'Bebida',
          price: 7.99,
          pictureUrl: 'https://via.placeholder.com/300',
        },
        {
          id: 2,
          title: 'Bolacha',
          description: 'Uma bolacha de chocolate',
          price: 2.50,
          pictureUrl: 'https://via.placeholder.com/300',
        },
      ]);
    }, 2000);
  });
};

function ItemDetailContainer() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getItem();
        setItem(result);
      } catch (error) {
        console.error('Erro ao buscar detalhes do item:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {item && <ItemDetail item={item} />}
    </div>
  );
}

export default ItemDetailContainer;
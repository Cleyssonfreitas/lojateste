import React from 'react';

function ItemDetail({ item }) {
  return (
    <>
      <div>
        <img src={item.pictureUrl} alt={item.title} />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>Preço: ${item.price}</p>
      </div>
    </>
  );
}

export default ItemDetail;
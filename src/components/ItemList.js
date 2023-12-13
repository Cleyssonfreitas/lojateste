import Item from './Item';

function ItemList({ items }) {
  return (
    <div className="row">
      {items.map((item) => (
        <div key={item.id} className="col-md-4 mb-4">
          <Item item={item} />
        </div>
      ))}
    </div>
  );
}

export default ItemList;
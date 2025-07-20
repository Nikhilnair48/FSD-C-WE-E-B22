export default function Cart({ items, dispatch }) {
  if (items.length === 0) return <p>Your cart is empty.</p>;

  return (
    <section>
      <h2>Your Cart</h2>
      {items.map(item => (
        <div key={item.id}>
          <span>
            {item.name} × {item.quantity}
          </span>
          <button
            onClick={() =>
              dispatch({ type: 'REMOVE_FROM_CART', payload: item })
            }
          >
            Remove One
          </button>
        </div>
      ))}
    </section>
  );
}
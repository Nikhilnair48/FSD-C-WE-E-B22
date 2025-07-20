export default function ProductList({ products, dispatch }) {
  return (
    <section>
      <h2>Available Products</h2>
      {products.map(p => (
        <div key={p.id}>
          <span>{p.name} — ${p.price}</span>
          <button
            onClick={() =>
              dispatch({ type: 'ADD_TO_CART', payload: p })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </section>
  );
}
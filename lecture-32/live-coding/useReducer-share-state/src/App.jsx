import React, { useReducer } from 'react';
import { cartReducer, initialCartState } from './cartReducer';
import ProductList from './ProductList';
import Cart from './Cart';
import './App.css'

const PRODUCTS = [
  { id: 1, name: 'T-shirt', price: 19.99 },
  { id: 2, name: 'Mug',     price:  9.99 },
];

export default function App() {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <div>
      <h1>My Shop</h1>
      {/* pass down the same dispatch & slice of state */}
      <ProductList products={PRODUCTS} dispatch={dispatch} />
      <Cart items={state.items} dispatch={dispatch} />
    </div>
  );
}
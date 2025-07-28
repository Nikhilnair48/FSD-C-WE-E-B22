import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import './App.css';
import ProductsPage from "./ProductsPage";
import CartPage from "./CartPage";
import { useReducer } from "react";
import cartReducer, { initialCart } from "./reducer";

// CartPage -> remove a product from your cart
// ProductsPage -> add a product to your cart
function App() {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);
  console.log(cart);
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Products</Link>
        <br />
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductsPage cart={cart} dispatch={dispatch} />} />
        <Route path="/cart" element={<CartPage cart={cart} dispatch={dispatch} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import './App.css';
import ProductsPage from "./ProductsPage";
import CartPage from "./CartPage";
import { CartProvider, useCart } from "./CartContext";

// CartPage -> remove a product from your cart
// ProductsPage -> add a product to your cart
function App() {
  const cart = useCart();
  console.log(cart);

  return (
    <>
        <nav>
          <Link to="/">Products</Link>
          <br />
          <Link to="/cart">Cart ({cart.length})</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
    </>
  )
}

export default App

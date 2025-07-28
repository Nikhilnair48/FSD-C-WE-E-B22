import React from "react";
import { useCart, useCartDispatch } from "./CartContext";

function CartPage() {
    const cart = useCart();
    const dispatch = useCartDispatch();

  return (
    <div>
        <h2>Your Cart</h2>
        {
            cart.length === 0 ?
                ( <p>No items in cart</p> )
                : 
                (
                    <ul>
                        {cart.map(product => {
                            return (
                                <li key={product.id} style={{ marginBottom: 10}}>
                                    <span>{product.name} - {product.price}</span>
                                    <button
                                        style={{ marginLeft: 10 }}
                                        onClick={() => dispatch({ type: "REMOVE_ITEM", id: product.id })}>
                                            Remove
                                        </button>
                                </li>
                            );
                        })}
                    </ul>
                )
        }

    </div>
  )
}

export default CartPage;

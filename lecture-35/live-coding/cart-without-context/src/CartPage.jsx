import React from "react";

function CartPage({ cart, dispatch }) {

    const handleRemove = (id) => {
        dispatch({ type: "REMOVE_ITEM", id });
    }
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
                                    <button style={{ marginLeft: 10 }} onClick={() => handleRemove(product.id)}>Remove</button>
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

import React from "react";
import { useCartDispatch } from "./CartContext";

const sampleProducts = [
    { id: 1, name: "Book", price: 10 },
    { id: 2, name: "Pen", price: 2 }
]

function ProductsPage() {
    const dispatch = useCartDispatch();

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {sampleProducts.map(product => {
                    return (
                        <li key={product.id} style={{ marginBottom: 10}}>
                            <span>{product.name} - {product.price}</span>
                            <button
                                style={{ marginLeft: 10 }} 
                                onClick={() => dispatch({ type: "ADD_ITEM", product })}>
                                    Add to card
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default ProductsPage;

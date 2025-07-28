import React from "react";

const sampleProducts = [
    { id: 1, name: "Book", price: 10 },
    { id: 2, name: "Pen", price: 2 }
]

function ProductsPage({ cart, dispatch }) {
    const handleAdd = (product) => {
        dispatch({ type: "ADD_ITEM", product })
    }

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {sampleProducts.map(product => {
                    return (
                        <li key={product.id} style={{ marginBottom: 10}}>
                            <span>{product.name} - {product.price}</span>
                            <button style={{ marginLeft: 10 }} onClick={() => handleAdd(product)}>Add to card</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default ProductsPage;

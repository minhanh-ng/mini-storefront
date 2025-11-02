'use client';
import { useState } from "react";


export default function ProductCard({ name, price }) {
     const [products, setProducts] = useState((0));
    return (
    <div className="product-card">
        <h2>{name}</h2>
        <p>Price: ${price}</p>
        <button onClick={() => setCount(c=> c+1)}>Add Item</button>
        <button onClick={() => setCount(c=> c-1)}>Remove Item</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
);
 }
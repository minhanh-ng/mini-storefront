'use client';

 export default function ProductList({products, addToCart}) {
    return (
        <div> 
            <h2>Product List</h2>
            <ul>
                {products.map(p => (
                    <li key={p.id}> 
                    {p.name}: ${p.price} ({p.category}) — Stock: {p.stock}
                    <button onClick={() => addToCart(p)}>Add to cart</button> 
                    </li>
                ))}
            </ul>
        </div>
    )
 }

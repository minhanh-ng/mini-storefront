'use client';

export default function ProductCard({ product, addToCart }) {
    const {name, price, category, stock} = product;
    const OutOfStock = stock === 0 ;

    return (
    <div className="product-card">
        <h2>{name}</h2>
        <p>Category: {category}</p>
        <p>Price: ${price}</p>
        <p>Stock: {stock}</p>
        
{/* Disable Add button if out of stock; show “Out of stock” */}
      {OutOfStock ? (
        <button disabled style={{ cursor: 'not-allowed' }}>Out of Stock</button>
        ) : (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        )}
    </div>
  );
}

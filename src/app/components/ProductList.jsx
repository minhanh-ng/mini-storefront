'use client';
import ProductCard from "./ProductCard";

// Maps products to cards (key={id})
 export default function ProductList({products, addToCart}) {
    return (
        <div> 
            <h2>Products</h2>
        
            <div className="product-list"> 
                {products.map(p => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
            ))}
            </div>
        </div>
    )
 }

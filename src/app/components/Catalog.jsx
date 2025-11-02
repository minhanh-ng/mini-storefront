'use client';
import { useState, useEffect } from "react";
import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategoryFilter";
import ProductList from "./ProductList";

export default function ProductCatalog() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [filters, setFilters] = useState({price:'', category: ''});

    useEffect(() => {
            fetch('/api/products')
            .then(r => r.json())
            .then(setProducts)
            .catch(console.error);
        }, []);

    const addToCart = (product) => {
        setCart([...cart, product]);
        };

// interval stock updates with cleanup
    useEffect(() => {
        const interval = setInterval(() => {
            setProducts(prev =>
            prev.map(p => ({
                ...p,
                stock: Math.max(p.stock - Math.floor(Math.random() * 2), 0),
                }))
            );
            }, 4000);

        return () => clearInterval(interval);
    }, []);

    const update = (k,v) => { setFilters(prev => ({...prev, [k]:v})) }; 

    let filteredProducts = products;
    if (filters.category !== '') {
    filteredProducts = filteredProducts.filter(p =>
        p.category.toLowerCase().includes(filters.category.toLowerCase())
    );
    }
    if (filters.price !== '') {
    filteredProducts = filteredProducts.filter(p =>
        p.price <= Number(filters.price)
    );
    }

    return (
        <div>
            <h2>Product Catalog</h2>
            <PriceFilter value={filters.price} onChange={(v) => update('price', v)} />
            <CategoryFilter value={filters.category} onChange={(v) => update('category', v)} />
            <ProductList products={filteredProducts} addToCart={addToCart} />
            <h3>Cart: {cart.length} item(s)</h3>
        </div>
    );
};
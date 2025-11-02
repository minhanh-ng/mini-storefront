'use client';
import { useState, useEffect } from "react";
import PriceFilter from "./PriceFilter";
import ProductList from "./ProductList";
import CategoryFilter from "./CategoryFilter";

export default function ProductCatalog() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [filter, setFilter] = useState({price:'', category:''});

    useEffect(() => {
        fetch('/api/products')
        .then(r => r.json())
        .then(setProducts)
        .catch(console.error);
    }, []);

    return (
        <ul>
            {products.map(p => (
                <li key={p.id}> {p.name}: ${p.price} ({p.category}) — Stock: {p.stock}</li>
            ))}
        </ul>
    );
} 

export default function ProductCatalog() {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({price:'', category: ''});
    const [cart, setCart] = useState([]);

    useEffect(() => {
            fetch('/api/products')
            .then(r => r.json())
            .then(setProducts)
            .catch(console.error);
        }, []);

    useEffect(() => {
  const interval = setInterval(() => {
    setProducts(prev =>
      prev.map(p => ({
        ...p,
        stock: Math.max(p.stock - Math.floor(Math.random() * 2), 0),
      }))
    );
    }, 2000); 
    return () => clearInterval(interval);
    }, []);

    const update = (k,v) => setFilters(prev => ({...prev, [k]:v}));

    return (
        <div>
            <h2>Product Catalog</h2>
            <PriceFilter value={filters.price} onChange={(v) => update('price', v)} />
            <CategoryFilter value={filters.category} onChange={(v) => update('category', v)} />
            <ProductList filters={filters} />
        </div>
    );
}
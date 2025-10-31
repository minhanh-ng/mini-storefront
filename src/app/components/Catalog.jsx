'use client';
import { useState, useEffect } from "react";

export default function SalesDashboard() {
    const [sales, setSales] = useState([])

    useEffect(() => {
        fetch('/api/products')
        .then(r => r.json())
        .then(setSales)
        .catch(console.error);
    }, []);

    return (
        <ul>
            {sales.map(s => (
                <li key={s.id}> {s.name}: ${s.price} ({s.category}) — Stock: {s.stock}</li>
            ))}
        </ul>
    );
}
